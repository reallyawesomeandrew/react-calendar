const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    subject: {
        type: String,
        required: false
    }
    
});

module.exports = mongoose.model("Event", EventSchema)