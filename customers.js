//customers.js

const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore();

const createSingle = customer => {
  return datastore.save({
    key: datastore.key('customer'),
    data: customer,
  });
};

const getAll = () => {
  const query = datastore.createQuery('customer')
  return datastore.runQuery(query);
};

const getById = customerId => {
  const query = datastore.createQuery('customer').filter('id', customerId);
  return datastore.runQuery(query);
};

module.exports.createSingle = createSingle;  
module.exports.getAll = getAll;  
module.exports.getById = getById; 