var faker = require('faker');
var latinize = require('latinize');

const express = require('express');
const router = express.Router();
const GuestsController = require('./controllers/guests');
const EventsController = require('./controllers/events');

router.get('/faker', (req, res) => {
    let guests = [];

    for (let i = 0; i < 50; i++) {
        let name = faker.name.findName();

        guests.push({
            name: name,
            formatted_name: latinize(name).toLocaleLowerCase(),
            present: faker.random.boolean(),
        });
    }

    res.status(200).json(guests);
});

router.get('/events', EventsController.getAll);
router.post('/events', EventsController.create);
router.delete('/events', EventsController.delete);
router.put('/events', EventsController.update);
router.get('/events/:eventId', EventsController.get);
router.put('/events/:eventId/update-guest-present', GuestsController.updatePresence);

module.exports = router;