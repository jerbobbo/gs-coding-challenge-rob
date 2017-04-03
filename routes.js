const app = require('express').Router();
const models = require('./db').models;

app.get('/categories', (req, res, next)=> {
  models.Category.findAll()
    .then( categories => res.send(categories))
    .catch(next);
});

module.exports = app;
