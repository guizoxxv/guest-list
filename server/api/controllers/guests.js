const { Pool } = require('pg')

const pool = new Pool({
    host: 'db',
    database: 'guest_list',
    user: 'root',
    password: 'root',
})

exports.getGuests = (req, res, next) => {
    pool.query('SELECT guests FROM events WHERE id = $1', [1])
        .then(result => {
            res.status(200).json(result.rows[0] ? result.rows[0].guests : []);
        })
        .catch(e => console.error(e.stack))
}

exports.updateGuestPresent = (req, res, next) => {
    pool.query('UPDATE events SET guests = jsonb_set(guests, "{present,0}", true, false) WHERE id = 1')
        .then(result => {
                res.status(200).json(result);
            })
        .catch(e => console.error(e.stack))

    // Guest.findOneAndUpdate({ _id: req.body._id }, { present: !req.body.present })
    //     .then(doc => {
    //         res.status(200).json(doc);
    //     })
    //     .catch(err => {
    //         res.status(500).json({
    //             message: 'An error occurred',
    //             error: err,
    //         });
    //     });
}