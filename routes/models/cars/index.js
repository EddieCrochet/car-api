const cars = require('express').Router({ mergeParams: true });
//mergeparams tells router to merge params that are
// created on this set of routes with the ones from parents
const all = require('./all');

cars.get('/', all);

module.exports = cars;