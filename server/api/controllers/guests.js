const Guest = require('../models/guest');

exports.getGuests = (req, res, next) => {
    Guest.find({})
        .sort({ formatted_name: 1 })
        .select('name formatted_name present')
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