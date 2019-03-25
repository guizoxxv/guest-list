const Guest = require('../models/guest');

exports.guestsList = (req, res, next) => {
    Guest.find()
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