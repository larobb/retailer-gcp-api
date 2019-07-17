'use strict';

const express = require('express');
const faker = require('faker');
const customers = require('./customers');

const app = express();
app.enable('trust proxy');

app.post('/customers', async function(req, res, next) {
  try {
    const customer = {
      id: faker.random.uuid().toString(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      createDate: new Date(),    
    };
    await customers.createSingle(customer);
    const response = {    
      created: customer,
      href: req.protocol + '://' + req.get('host') + `/customers/${customer.id}`,
      rel: 'self',      
    }    
    res.send(response);
    next();
  } catch (error) {
    next(req);
  }
});

app.get('/customers', async function(req, res, next) {
  try {
    const allCustomers = await customers.getAll();
    res.send(allCustomers).end();
  } catch (error) {
    next(error);
  }
});

app.get('/customers/:id', async function(req, res, next) {
  try {    
    var customerId = req.params.id;
    const customer = await customers.getById(customerId);
    res.send(customer).end();
  } catch (error) {
    next(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
