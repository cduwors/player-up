const { Schema, model } = require("mongoose");

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
		type: String,
		required: true,
	},
	time: {
		type: String,
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
	organizerName: {
		type: String,
	},
	attending: [
        {
		type: String,
	},
    ]
});

const Events = model("Events", eventSchema)

module.exports = Events;
