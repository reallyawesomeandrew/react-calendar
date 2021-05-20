import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { compareTwoDates } from '../utils/date';
import { v4 as uuidv4} from "uuid";
export const Reminder = () => {
    const {events} = useContext(GlobalContext);
    const today = new Date();
    const tommorow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    let todayEvents = [];
    let tommorowEvents = [];
    events.forEach(event => {
        const date = new Date(event.day)
        if (compareTwoDates(date, today)) {
            todayEvents.push(event)
        }else if(compareTwoDates(date, tommorow)){
            tommorowEvents.push(event);
        }
    })
    return (
        <div>
            <h2>Due Today: </h2>
            <div className="event-reminder-container">
                {
                    todayEvents.map(event => {
                        return(
                            <div key={uuidv4()}>{event.completed === false?<div className="event-reminder not-completed">
                                {event.subject?<span><span className="subject-name">{event.subject}</span> - </span>: ""}
                                <span className="event-name">{event.eventName}</span>
                            </div>:<div className="event-reminder completed">
                                {event.subject?<span><span className="subject-name">{event.subject}</span> - </span>: ""}
                                <span className="event-name">{event.eventName}</span>
                            </div>
                            }</div>

                        )
                    })
                }
            </div>
            <h2>Due Tommorow: </h2>
            <div className="event-reminder-container">
                {
                    tommorowEvents.map(event => {
                        return(
                            <div key={uuidv4()}>{event.completed === false?<div className="event-reminder not-completed">
                            {event.subject?<span><span className="subject-name">{event.subject}</span> - </span>: ""}
                            <span className="event-name">{event.eventName}</span>
                        </div>:<div className="event-reminder completed">
                            {event.subject?<span><span className="subject-name">{event.subject}</span> - </span>: ""}
                            <span className="event-name">{event.eventName}</span>
                        </div>
                        }</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
