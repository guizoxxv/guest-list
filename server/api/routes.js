const express = require('express');
const router = express.Router();
const AuthController = require('./controllers/auth');
const GuestsController = require('./controllers/guests');

router.post('/register', AuthController.register);
router.get('/events/:event_id/guests', GuestsController.getGuests);
router.put('/events/:event_id/guests/update-present', GuestsController.updateGuestPresent);

module.exports = router;