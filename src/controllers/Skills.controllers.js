const { queryGenerator } = require('../utils/index');
const { getAllSkills, getSkillById, getRandomSkills } = require('../queries/skills.queries');

const SkillsController = {
  async getAll(req, res, connection) {
    const {
      name,
      mp,
      type,
      effect,
      ...unknown
    } = req.query;

    // handle req.queries:
    const unknownParams = Object.keys(unknown);
    const rawParams = [{ name }, { mp }, { type }, { effect }];
    const params = rawParams.filter((item) => Object.values(item)[0] !== undefined);
    const getAllByParams = await queryGenerator('skills', params);

    try {
      if (unknownParams && unknownParams.length > 0) {
        res.status(400).json({
          status: 'not_found',
          message: `The following request queries are unknown: ${unknownParams.join(', ')}.`,
          records: 0,
          error: true,
        });
        return;
      }

      if (params && params.length > 0) {
        const paramValues = params.map((param) => Object.values(param)[0]);
        const results = await connection.query(getAllByParams, paramValues);

        // If There is a result and it has content
        if (results.rows && results.rows.length > 0) {
          res.status(200).json({
            status: 'success',
            message: null,
            records: results.rows.length,
            data: results.rows,
          });
        } else {
          res.status(404).json({
            status: 'no_match',
            message: 'No matching for query parameters.',
            records: 0,
            error: true,
          });
          return;
        }
      } else {
        const results = await connection.query(getAllSkills);

        if (results) {
          res.status(200).json({
            status: 'success',
            message: null,
            records: results.rows.length,
            data: results.rows,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
        records: 0,
        error: true,
      });
    } finally {
      // do something here
    }
  },

  async getById(req, res, connection) {
    const { id } = req.params;

    try {
      const results = await connection.query(getSkillById, [id]);
      if (results) {
        res.status(200).json({
          status: 'success',
          message: null,
          records: results.rows.length,
          data: results.rows,
        });
      }
    } catch (error) {
      // If has errors, then return 500 (internal error code);
      res.status(500).json({
        status: 'error',
        message: error,
        records: 0,
        error: true,
      });
    } finally {
      // do somethign here later
    }
  },

  async getRandomSkills(req, res, connection) {
    const { amount = 1, ...unknown } = req.query;
    const haveUnknowQuery = Object.keys(unknown).length > 0;

    console.log(Object.keys(unknown));

    if (haveUnknowQuery) {
      res.status(400).json({
        status: 'query_error',
        message: 'Please, specify only the amount of data you want.',
        records: 0,
        error: true,
      });
      return;
    }

    try {
      const results = await connection.query(getRandomSkills, [amount]);
      if (results) {
        res.status(200).json({
          status: 'success',
          message: null,
          records: results.rows.length,
          data: results.rows,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
        records: 0,
        error: true,
      });
    } finally {
      // do something here later
    }
  },
};

module.exports = SkillsController;
