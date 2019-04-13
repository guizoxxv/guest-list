const Event = require('../models/event').model;
const Guest = require('../models/guest').model;

exports.getGuests = (req, res, next) => {
    Event.findOne({ _id: req.body._id ? req.body._id : '5cb2030d6030af888c2b2ebf' })
        .then(docs => {
            return docs.guests.sort();
        })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred',
                error: err,
            });
        });
    // Guest.find({})
    //     .sort({ formatted_name: 1 })
    //     .select('name formatted_name present')
    //     .then(docs => {
    //         res.status(200).json(docs);
    //     })

    //     .catch(err => {
    //         res.status(500).json({
    //             message: 'An error occurred',
    //             error: err,
    //         });
    //     });
}

exports.updateGuestPresent = (req, res, next) => {
    Guest.findOneAndUpdate({ _id: req.body._id }, { present: !req.body.present })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred',
                error: err,
            });
        });
}