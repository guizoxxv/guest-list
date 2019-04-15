const db = require('../db/connection');

exports.getGuests = (req, res, next) => {
    db.query('SELECT guests FROM events WHERE id = $1', [1])
        .then(result => {
            res.status(200).json(result.rows[0] ? Object.values(result.rows[0].guests) : []);
        })
        .catch(e => console.error(e.stack));
}

exports.updateGuestPresent = (req, res, next) => {
    let guestId = req.body.id;
    let present = !req.body.present;
    let path = `{${guestId}, present}`;

    db.query(
            `UPDATE events
            SET guests = jsonb_set(guests, $1, $2::jsonb, false)
            WHERE id = $3
            RETURNING guests->$4 as guest`,
            [path, present, 1, guestId]
        )
        .then(result => {
            res.status(200).json({
                message: 'Guest updated',
                guest: result.rows[0].guest
            });
        })
        .catch(e => console.error(e.stack));
}