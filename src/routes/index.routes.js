// Import all controllers here.
const DemonsController = require('../controllers/Demons.controllers');
const SkillsController = require('../controllers/Skills.controllers');

const allRoutes = (app, connection) => {
  app.get('/', (req, res) => {
    res.send('<h1>HEEEE HOOOO!</h1>');
    console.log('(!) "Hee hoo" route was requested.');
  });
  app.get('/api/v1/demons', (req, res) => DemonsController.getAll(req, res, connection));
  app.get('/api/v1/demons/:id', (req, res) => DemonsController.getById(req, res, connection));
  app.get('/api/v1/skills', (req, res) => SkillsController.getAll(req, res, connection));
  app.get('/api/v1/skills/:id', (req, res) => SkillsController.getById(req, res, connection));
  app.get('/api/v1/apps' /* controller goes here */);
  app.get('/api/v1/specialfusions' /* controller goes here */);
};

module.exports = allRoutes;
