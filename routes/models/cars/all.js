const data = require('../../../data.json');

module.exports = (req, res) => {
    //just getting all the cars that have a matching
    //modelId from the one in the URL
    const modelId = req.params.modelId * 1;
    const cars = data.cars.filter(c => c.modelId === modelId);

    res.status(200).json({ cars });
};