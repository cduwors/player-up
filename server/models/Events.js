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
    //DATE represents full date and time timestamp, so separate TIME is not required.
    dateAndTime: {
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
      },
    

});

module.exports = eventSchema;