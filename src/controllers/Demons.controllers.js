const { queryGenerator } = require('../utils');
const { getAllDemons, getDemonById, getRandomDemon } = require('../queries/demons.queries');

const DemonsController = {
  async getAll(req, res, connection) {
    // TODO: Add more req.queries to search by and fix the queryGennerator helper to it.
    const {
      name, lvl, race, ...unknown
    } = req.query;

    // Make an array from unknown and with known params from queries;
    const unknownParams = Object.keys(unknown);
    const rawParams = [{ name }, { lvl }, { race }];

    // Remove undefined items from array of params:
    const params = rawParams.filter((item) => Object.values(item)[0] !== undefined);

    // Build the sql query with only the query params passed throught url
    const getAllByParams = await queryGenerator('demons', params);

    try {
      // If client send req.query unknown, respond with 404;
      if (unknownParams && unknownParams.length > 0) {
        res.status(400).json({
          status: 'not_found',
          message: `The following request queries are unknown: ${unknownParams.join(', ')}.`,
          records: 0,
          error: true,
        });
        return;
      }

      // If params array has content:
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
        }
      } else {
        // If no req.query was specified, get all
        const results = await connection.query(getAllDemons);

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
  async getById(req, res, connection) {
    const { id } = req.params;

    try {
      const results = await connection.query(getDemonById, [id]);
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

  async getRandomDemon(req, res, connection) {
    const { amount = 1, ...unknown } = req.query;
    const haveUnknowQuery = Object.keys(unknown).length > 0;

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
      const results = await connection.query(getRandomDemon, [amount]);
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

module.exports = DemonsController;
