const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');

/*
const data = require('../../data.json');

models.param('modelId', (req, res, next, value) => {
    const model = data.models.find(m => m.id === (value * 1));

    if (model) {
        req['model'] = model;
        next();
    } else {
        res.status(404).send('Invalid model ID');
    }
});
*/
////////
//Replacing the above chunck with below for cleanliness

const findObject = require('../../utils/findObject');

models.param('modelId', findObject('model'));

//creating cars as a nested resource of models
//this will allow us to get all cars with that modelID
models.use('/:modelId/cars', cars);

models.get('/:modelId', single);
models.get('/', all);

module.exports = models;