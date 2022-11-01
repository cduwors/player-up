const { Schema } = require("mongoose");

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
});

module.exports = eventSchema;
