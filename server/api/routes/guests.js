var faker = require('faker');
var latinize = require('latinize');

const express = require('express');
const router = express.Router();
const GuestsController = require('../controllers/guests');

router.get('/faker', (req, res, next) => {
    let guests = [];

    for(let i = 0; i < 50; i++) {
        let name = faker.name.findName();

        guests.push({
            name: name,
            formatted_name: latinize(name).toLocaleLowerCase(),
            present: faker.random.boolean(),
        });
    }

    res.status(200).json(guests);
});
router.get('/:eventId', GuestsController.getGuests);
router.put('/:eventId', GuestsController.updateGuestPresent);

module.exports = router;