const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    formatted_name: {
        type: String,
        required: true,
    },
    present: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = {
    model: mongoose.model('Guest', guestSchema),
    schema: guestSchema
}
