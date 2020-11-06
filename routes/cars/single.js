const data = require('../../data.json');

module.exports = (req, res) => {
    //const carId = req.params.carId * 1;
    //const car = data.cars.find(c => c.id === carId);

    //again, now that our object is in the req this can be much simpler
    const car = req.car;

    //sends json res with only one car with ID selected
    res.status(200).json({ car });
};