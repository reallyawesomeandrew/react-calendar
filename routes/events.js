const express= require("express");
const router = express.Router();
const { getEvents, addEvent, deleteEvent,editEvent } = require("../controllers/events");

router.route("/").get(getEvents).post(addEvent);

router.route("/:id").delete(deleteEvent).put(editEvent)

module.exports = router;