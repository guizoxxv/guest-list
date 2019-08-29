const mongoose = require('mongoose');
const guestSchema = require('./guest').schema;
const uniqueValidator = require('mongoose-unique-validator');

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    guests: [guestSchema]
});

eventSchema.plugin(uniqueValidator);

module.exports = {
    model: mongoose.model('Event', eventSchema, 'events'),
    schema: eventSchema
}
