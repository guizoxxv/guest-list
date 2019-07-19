const Event = require('../models/event').model;

exports.getAll = (req, res) => {
    Event.find({})
        .sort({ name: 1 })
        .select('name')
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.get = (req, res) => {
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
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.create = (req, res) => {
    let event = new Event;

    event.name = req.body.name;

    event.save()
        .then(result => {
            res.status(201).json({
                message: 'Event created.',
                event: result,
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.body.id)
        .then(event => {
            if(event) {
                res.status(200).json({
                    message: 'Event deleted.',
                });
            } else {
                res.status(404).json({
                    message: 'Event not found.'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.update = (req, res) => {
    Event.findByIdAndUpdate(req.body.id, { name: req.body.name }, { new: true })
        .then(event => {
            if(event) {
                res.status(200).json({
                    message: 'Event updated.',
                    event: event
                });
            } else {
                res.status(404).json({
                    message: 'Event not found.'
                }); 
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}