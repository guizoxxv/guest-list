const Event = require('../models/event').model;

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