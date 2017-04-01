const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const ServiceType = conn.define('service_type', {
  name: conn.Sequelize.STRING
});

const Service = conn.define('service', {
  name: conn.Sequelize.STRING,
  priority: {
    type: conn.Sequelize.INTEGER,
    defaultValue: 1
  }
});

Service.belongsTo(ServiceType);
ServiceType.hasMany(Service);

const sync = ()=> conn.sync({ force: true });

const seed = ()=> {
  const serviceTypes = [ 'Hair', 'Makeup', 'Nails'];
  const services = [ {name: 'Blowout', priority: 5}, { name: 'Braids', priority: 3 }, { name: 'Eyelashes', priority: 3}, { name: 'Shellac Nails', priority: 2 }, { name: 'Glitter Nails', priority: 5}];
  let hair, makeup, nails;
  let blowout, braids, eyelashes, shellac, glitter
  return sync()
    .then(()=> Promise.all(serviceTypes.map( name => ServiceType.create({ name }))))
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
    ServiceType
  }
};

