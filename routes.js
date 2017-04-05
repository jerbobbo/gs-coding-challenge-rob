const app = require('express').Router();
const models = require('./db').models;

app.get('/categories', (req, res, next)=> {
  models.Category.findAll()
    .then( categories => res.send(categories))
    .catch(next);
});

app.get('/categories/:categoryId', (req, res, next) => {
  models.Category.findById(req.params.categoryId, { include: [ models.Service ]})
  .then( category => res.send(category) , next);
});

app.post('/categories/:categoryId/services', (req, res, next) => {
  models.Service.create( {
    name: req.body.name,
    categoryId: req.params.categoryId
  })
  .then( (service) => {
    res.send(service);
  }, next);
});

app.delete('/categories/:categoryId/services/:id', (req, res, next) => {
  models.Service.findById(req.params.id)
    .then( service => service.destroy() )
    .then( () => res.status(204).send() );
});

module.exports = app;
