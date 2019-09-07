const Event = require('../models/event').model;
const Guest = require('../models/guest').model;
const formatName = require('../utils').formatName;
const _ = require('underscore');

exports.getAll = (req, res) => {
    // console.clear();
    Event.find({})
        .sort({ name: 1 })
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

            return _.sortBy(doc.guests, 'formatted_name');
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
            console.log(err);
            if (err.name === "ValidationError") {
                res.status(422).json(err);
            }

            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.delete = (req, res) => {
    Event.findByIdAndRemove(req.params.eventId)
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
    let { name, guests } = req.body;

    let dbGuests = guests.map(guest => {
        let dbGuest = new Guest;

        dbGuest.name = guest.name;
        dbGuest.formatted_name = formatName(guest.name);

        return dbGuest;
    });

    Event.findById(req.params.eventId)
        .then(doc => {
            doc.name = name;
            doc.guests = dbGuests;

            doc.save()
            .then(res => {
                res.status(200).json({
                    message: 'Event updated.',
                    event: doc
                });
            })
            .catch(err => {
                if (err.name === "ValidationError") {
                    res.status(422).json(err);
                }

                res.status(500).json({
                    message: 'An error occurred.',
                    error: err,
                }); 
            });
        })
        .catch(err => {
            if (err.name === "ValidationError") {
                res.status(422).json(err);
            }

            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}