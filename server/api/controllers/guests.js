const Event = require('../models/event').model;
const Guest = require('../models/guest').model;
const formatName = require('../utils').formatName;

exports.updateGuests = (req, res) => {
    let guests = req.body.guests;

    let dbGuests = guests.map(guest => {
        let dbGuest = new Guest;

        dbGuest.name = guest.name;
        dbGuest.formatted_name = formatName(guest.name);
        
        return dbGuest;
    });
    
    Event.findById(req.params.eventId)
        .then(doc => {
            doc.guests = dbGuests;

            doc.save();

            res.status(200).json({
                message: 'Event guests updated.',
                event: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}

exports.updatePresence = (req, res, next) => {
    Event.findById(req.params.eventId)
        .then(doc => {
            let guest = doc.guests.id(req.body._id);

            guest.present = !guest.present;

            doc.save();

            res.status(200).json({
                message: 'Guest presence updated.',
                guest: guest
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred.',
                error: err,
            });
        });
}