const app = require('express').Router();
const models = require('./db').models;

app.get('/serviceTypes', (req, res, next)=> {
  models.ServiceType.findAll()
    .then( serviceTypes=> res.send(serviceTypes))
    .catch(next);
});

module.exports = app;
