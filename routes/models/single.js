const data = require('../../data.json');

module.exports = (req, res) => {
    //coerces our modelId from a string to an integer

    //const modelId = req.params.modelId * 1;

    //then get the model that matched the modelID of the cars(req.params)
    //const model = data.models.find(m => m.id === modelId);
    //we now have access to the object in the request when the handler is hit

    //so the below is simple all we need now
    const model = req.model;

    res.status(200).json({ model });
};

//file gets data from the json and sets the 
//model ID on the return of the export