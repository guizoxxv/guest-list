const faker = require('faker');
const formatName = require('./utils').formatName;

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
            formatted_name: formatName(name),
            present: faker.random.boolean(),
        });
    }

    res.status(200).json(guests);
});

// Events
router.get('/events', EventsController.getAll);
router.post('/events', EventsController.create);
router.get('/events/:eventId', EventsController.get);
router.put('/events/:eventId', EventsController.update);
router.delete('/events/:eventId', EventsController.delete);

// Guests
router.put('/events/:eventId/update-guest-presence', GuestsController.updatePresence);

module.exports = router;