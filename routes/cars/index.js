const cars = require('express').Router();
const all = require('./all');
const single = require('./single');

/*
const data = require('../../data.json');

cars.param('carId', (req, res, next, value) => {
  const car = data.cars.find(c => c.id === (value * 1));

  if (car) {
    req['car'] = car;
    next();
  } else {
      //send a 404 error for id that doesnt exists instead of an empty object
    res.status(404).send('Invalid car ID');
  }
});
*/
/////////////
//Replacing above chunk with below for cleanliness again!

const findObject = require('../../utils/findObject');

cars.param('carId', findObject('car'));

//When it's just at cars, show all cars
cars.get('/', all);
//If we have an ID number at the end... show just tat car using the single.js
cars.get('/:carId', single);

module.exports = cars;