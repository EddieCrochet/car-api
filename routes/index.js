// requiring expreess in this file and creating a new 
//instance of Router() on it aaand holding all that in a variable called routes
const routes = require('express').Router();
const models = require('./models');
//AUTOMATICALLY GETS INDEX WHEN NOT SPECIFIED!!!
const cars = require('./cars');

//create a route at the root path of router w/ simple message
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

//import and use all of our models
routes.use('/models', models);

routes.use('/cars', cars);

//export the router
module.exports = routes;

