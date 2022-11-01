const { Schema } = require('mongoose');

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //DATE type works for both date and time requirements.
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    numberPlayersNeeded: {
        type: Number,
        required: true,
    },
    organizerNames: {
        type: String,
    }
});

module.exports = eventSchema;