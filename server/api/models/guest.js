const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    },
});

module.exports = {
    model: mongoose.model('Guest', guestSchema),
    schema: guestSchema
}
