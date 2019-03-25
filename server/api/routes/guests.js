const express = require('express');
const router = express.Router();
const GuestsController = require('../controllers/guests');

router.get('/', GuestsController.getGuests);

module.exports = router;