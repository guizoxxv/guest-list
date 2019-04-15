const db = require('../db');

exports.register = (req, res, next) => {
    res.status(200).json({
        message: 'Login Route'
    });
}