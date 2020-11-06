const data = require('../data.json');


//function that returns middleware function that wwe used in last 2 files
module.exports = type => {
    //type in this case is either car or model... type of model...
    return (req, res, next, value) => {
        const typePlural = `${type}s`;
        const obj = data[typePlural].find(t => t.id === (value * 1));
        
        if (obj) {
            req[type] = obj;
            next();
        } else {
            res.status(404).send(`Invalid ${type} ID`);
        };
    }
}