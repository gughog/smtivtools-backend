const { get_all_demons, get_demon_by_query } = require('../queries/demons.queries');

const DemonsModels = {
  async getAll(req, res, connection) {
    const { name, level, resist, isweak, repeal, drain, isnull, ...unknown } = req.query;

    try {
      const results = await connection.query(get_all_demons)

      if (results) {
        res.status(200).json({
          status: 'success',
          message: null,
          records: results.rows.length,
          data: results.rows
        })
      }

    } catch (error) {
      res.status(404).send({
        status: 'error',
        message: 'Some error has occured.',
        records: 0,
        error: true
      });

    } finally {
      console.log('END OF REQUEST')
    }
  },

  searchBy(req, res, connection) {

  }

  //TODO: getById () {}
};

module.exports = DemonsModels;