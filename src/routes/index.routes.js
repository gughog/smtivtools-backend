const all_routes = (app, connection) => {
  app.get('/', (req, res) => {
    res.send('<h1>HEEEE HOOOO!</h1>')
    console.log('(!) "Hee hoo" route was requested.')
  })
  app.get('/demons', /* controller goes here */)
  app.get('/skills', /* controller goes here */)
  app.get('/apps', /* controller goes here */)
  app.get('/specialfusions', /* controller goes here */)
};

module.exports = all_routes;