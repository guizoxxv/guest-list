const { db } = require('../db/connection');

exports.register = (req, res, next) => {
    res.status(200).json({
        message: 'Login Route'
    });
}