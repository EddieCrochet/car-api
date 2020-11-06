const data = require('../../data.json');

module.exports = (req, res) => {
    const cars = data.cars;

    //sends a json response withh all cars
    res.status(200).json({ cars });
};