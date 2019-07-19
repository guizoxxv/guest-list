const mongoose = require('mongoose');
const guestSchema = require('./guest').schema;

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    guests: [guestSchema]
});

module.exports = {
    model: mongoose.model('Event', eventSchema, 'events'),
    schema: eventSchema
}
