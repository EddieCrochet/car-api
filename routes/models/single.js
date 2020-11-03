const data = require('../../data.json');

module.exports = (req, res) => {
    //coerces our modelId from a string to an integer
    const modelId = req.params.modelId * 1;
    const model = data.models.find(m => m.id === modelId);

    res.status(200).json({ model });
};