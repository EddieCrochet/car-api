// Bring in dependencies
const app = require('express')();
const routes = require('./routes');

// connect all our routes to our application
app.use('/', routes);

//Turn on the server!
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});


///WE ARE IMPORTING OUR DATA
// https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers