const data = require('../../data.json');

module.exports = (req, res) => {
    const models = data.models;

    //importing our data then grabbing all models and returning them in the response
    res.status(200).json({ models });
};