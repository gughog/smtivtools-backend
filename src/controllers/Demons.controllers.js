// const { queryGenerator } = require('../utils');

const { getAllDemons, getDemonById } = require('../queries/demons.queries');

const DemonsController = {
  async getAll(req, res, connection) {
    const {
      name, level, race, resist, isweak, repeal, drain, isnull, ...unknown
    } = req.query;
    const unknownParams = Object.keys(unknown);
    const params = [
      { name }, { level }, { race }, { resist }, { isweak }, { repeal }, { drain }, { isnull },
    ];

    try {
      console.log(params);

      if (unknownParams && unknownParams.length > 0) {
        res.status(404).json({
          status: 'not_found',
          message: `The following request queries are unknown: ${unknownParams.join(', ')}.`,
          records: 0,
          error: true,
        });

        return;
      }

      // if () {
      // TODO: filtering by req.query
      // If has some req.query params to filter, search by them:

      // } else {
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
      // }
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

};

module.exports = DemonsController;
