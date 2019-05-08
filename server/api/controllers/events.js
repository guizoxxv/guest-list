const Event = require('../models/event').model;

exports.getEvents = (req, res, next) => {
    Event.find({})
        .sort({ name: 1 })
        .select('name')
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred',
                error: err,
            });
        });
}