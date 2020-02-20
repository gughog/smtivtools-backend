const { queryGenerator } = require('../utils/index');
const { getAllApps, getAppsById } = require('../queries/apps.queries');

const AppsController = {
  async getAll(req, res, connection) {
    const {
      name,
      points,
      requirements,
      description,
      ...unknown
    } = req.query;

    // handle req.queries:
    const unknownParams = Object.keys(unknown);
    const rawParams = [{ name }, { points }, { requirements }, { description }];
    const params = rawParams.filter((item) => Object.values(item)[0] !== undefined);
    const getAllByParams = await queryGenerator('apps', params);

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
        const results = await connection.query(getAllApps);

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
      // do something here later
    }
  },

  async getById(req, res, connection) {
    const { id } = req.params;

    try {
      const results = await connection.query(getAppsById, [id]);
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
};

module.exports = AppsController;
