const Event = require("../models/event")
exports.getEvents = async (req, res ) => {
    try {
        const events = await Event.find();
        return res.status(200).json({
            success: true,
            count: events.length,
            data: events
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}
exports.deleteEvent = async (req, res ) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event){
            return res.status(404).json({
                success: false,
                error: "No Event found"
            })
        }
        await event.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}
exports.addEvent= async (req, res ) => {
    try {
        const event = await Event.create(req.body);
        return res.status(201).json({
            success: true,
            data: event
        })
    } catch (err) {
        if(err.name === "ValidationError"){
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            })
        }else{
            return res.status(500).json({
                success: false,
                error: "Server Error"
            })
        }
    }

}

exports.editEvent = async (req, res ) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
            new: true});
        return res.status(201).json({
            success: true,
            data: event
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }

}