const Guest = require('../models/guest');

exports.getGuests = (req, res, next) => {
    Guest.find({}, { '_id': false })
        .select('name formatted_name present')
        .exec()
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

exports.updateGuest = (req, res, next) => {
    //
}