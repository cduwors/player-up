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
		type: String,
		required: true,
	},
	organizerName: {
		type: String,
	},
	attending: [
        {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
    ]
});

const Events = model("Events", eventSchema)

module.exports = Events;
