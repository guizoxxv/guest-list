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

exports.getEvent = (req, res, next) => {
    let name;

    Event.findById(req.params.eventId)
        .then(doc => {
            name = doc.name;

            return doc.guests.sort();
        })
        .then(docs => {
            res.status(200).json({
                name: name,
                guests: docs,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred',
                error: err,
            });
        });
}