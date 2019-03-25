const express = require('express');
const router = express.Router();
const GuestsController = require('../controllers/guests');

router.get('/', GuestsController.getGuests);
router.put('/', GuestsController.updateGuestPresent);

module.exports = router;