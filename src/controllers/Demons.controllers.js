const { get_all_demons, get_demon_by_query } = require('../queries/demons.queries');

const DemonsModels = {
  async getAll(req, res, connection) {
    try {
      const results = await connection.query(get_all_demons);

      // If has results, return them;
      if (results) {
        res.status(200).json({
          status: 'success',
          message: null,
          records: results.rows.length,
          data: results.rows
        })
      }

    } catch (error) {
      // If has errors, then return 500 (internal error code);
      res.status(500).json({
        status: 'error',
        message: 'Some internal error has occured.',
        records: 0,
        error: true
      });

    } finally {
    }
  },

  async searchBy(req, res, connection) {
    const { name, level, race, resist, isweak, repeal, drain, isnull, ...unknown } = req.query;
    const params = [ name, level, race, resist, isweak, repeal, drain, isnull ];

    try {
      // If some unknown queries is passed, returns an error
      if (unknown && unknown.length > 0) {
        res.status(404).json({
          status: 'not_found',
          message: `The following request queries are unknown: ${unknown.join()}.`,
          records: 0,
          error: true
        });
      }
      
      // Case queries are ok, then try to connect:
      const results = await connection.query(get_all_demons, `SELECT * demons WHERE ${fields.map((i, idx) => {
        return `${i} = $${idx + 1}${idx+1 === fields.length ? '' : ' AND'}`
      }).join(' ')}`);

    } catch (error) {

    } finally {
    }
  }

  //TODO: getById () {}
};

module.exports = DemonsModels;