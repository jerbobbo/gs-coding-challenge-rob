const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const Category = conn.define('category', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const Service = conn.define('service', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  priority: {
    type: conn.Sequelize.INTEGER,
    defaultValue: 1
  }
});

Service.belongsTo(Category);
Category.hasMany(Service);

const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const categories = [ 'Hair', 'Makeup', 'Nails'];
  const services = [ {name: 'Blowout', priority: 5}, { name: 'Braids', priority: 3 }, { name: 'Eyelashes', priority: 3}, { name: 'Shellac Nails', priority: 2 }, { name: 'Glitter Nails', priority: 5}];
  let hair, makeup, nails;
  let blowout, braids, eyelashes, shellac, glitter
  return sync()
    .then(()=> Promise.all(categories.map( name => Category.create({ name }))))
    .then( results => [ hair, makeup, nails] = results)
    .then(()=> Promise.all(services.map( service => Service.create({ name: service.name, priority: service.priority }))))
    .then( results => [ blowout, braids, eyelashes, shellac, glitter ] = results )
    .then( ()=> Promise.all([
      hair.setServices([braids, blowout]),
      makeup.setServices(eyelashes),
      nails.setServices([ shellac, glitter ])
    ]));
};

module.exports = {
  sync,
  seed,
  models: {
    Service,
    Category
  }
};

