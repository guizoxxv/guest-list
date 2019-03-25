const express = require('express');
const router = express.Router();
const GuestsController = require('../controllers/guests');

router.get('/', GuestsController.guestsList);

module.exports = router;