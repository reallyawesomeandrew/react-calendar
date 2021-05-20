import React, {useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
export const CalendarCell = ({newDate, events}) => {
    const {  addEvent, deleteEvent, editEvent } = useContext(GlobalContext);
    const [eventName, setEventName] = useState("");
    const [subject, setSubject] = useState("Algebra II");
    const today = new Date();
    let backgroundColor = "white";
    if(newDate === null){
        return(
            <div className="calendar-day" style={{ backgroundColor: "lightgray"}}></div>
        )
    }else{
        if (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() === today.getMonth() && newDate.getDate() === today.getDate()) {
            backgroundColor = "#e8e8e8";
        }
        return (
            <div className="calendar-day" style={{backgroundColor: backgroundColor}}>            
            {newDate.getDate()}
            {events.map(event => {
                return(<div className="event " key={uuidv4()} style={{textDecoration: event.completed === true ? "line-through": "none"}}>
                {event.subject == null? event.eventName: event.subject + " - " + event.eventName}
                <div>
                <span title="Mark as completed" className="event-check" onClick={() => {
                    editEvent({
                        ...event,
                        completed: !event.completed
                    },event._id)
                }}><i className="fas fa-check"></i></span>
                <span onClick={(e) => {deleteEvent(event._id)}} className="real-event-x"><i className="fas fa-times"></i></span>
                </div>

                </div>)
            })}
            <form action="" onSubmit={
                (e) => {
                    e.preventDefault();
                    const event = {
                        id: uuidv4(),
                        day: newDate,
                        eventName: eventName,
                        completed: false,
                        subject: subject
                    }
                    addEvent(event);
                    setEventName("")
                }
            }>  
                <div className="add-event-container">
                    <input type="submit" value="+" className="event-x" />
                    <select name="" className="event-subject-select" value={subject} onChange={e => setSubject(e.target.value)} >
                        <option value="Algebra II">Algebra II</option>
                        <option value="Orchestra">Orchestra</option>
                        <option value="Language Arts">Language Arts</option>
                        <option value="Earth & Space">Earth & Space</option>
                        <option value="American Studies">American Studies</option>
                        <option value="Applied Technology">Applied Technology</option>
                        <option value="PE">PE</option>
                        <option value="Science">Science</option>
                    </select>
                    <input type="text" className="event-name" value={eventName} onChange={(e) => {
                        setEventName(e.target.value);
                    }}/>
                </div>
            </form>


            </div>
        )
    }

}
