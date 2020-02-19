// Import all controllers here.
const DemonsController = require('../controllers/Demons.controllers');

const allRoutes = (app, connection) => {
  app.get('/', (req, res) => {
    res.send('<h1>HEEEE HOOOO!</h1>');
    console.log('(!) "Hee hoo" route was requested.');
  });
  app.get('/demons', (req, res) => DemonsController.getAll(req, res, connection));
  app.get('/demons/:id', (req, res) => DemonsController.getById(req, res, connection));
  app.get('/skills' /* controller goes here */);
  app.get('/apps' /* controller goes here */);
  app.get('/specialfusions' /* controller goes here */);
};

module.exports = allRoutes;
