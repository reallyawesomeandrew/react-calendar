import React, { useContext, useEffect, useState }  from 'react';
import { CalendarCells } from './CalendarCells';
import { GlobalContext } from '../context/GlobalState';
import { Reminder } from "./Reminder";

export const Calendar = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const {  events, getEvents } = useContext(GlobalContext);
    const today = new Date();
    const [month, setMonth] = useState(today.getMonth());
    useEffect(() => {
        getEvents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
        return (
            <div className="container">
                <header id="header">
                    <h1>Calendar</h1>
                </header>
                <main>
                    <Reminder/>
                    <h2>
                        <select name="month" id="month" value={month} onChange = {(e) => {
                            setMonth(e.target.value);
                        }}>{
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => {
                                return(
                                    <option value={num} key={num}>{monthNames[num]}</option>
                                )
                            })
                        }</select> {today.getFullYear()}
                    </h2>

                    <div id="calendar-headers">
                        <div className="week-days">Sun</div>
                        <div className="week-days">Mon</div>
                        <div className="week-days">Tue</div>
                        <div className="week-days">Wed</div>
                        <div className="week-days">Thu</div>
                        <div className="week-days">Fri</div>
                        <div className="week-days">Sat</div>
                    </div>
                    <CalendarCells month={month} events={events}/>
                </main>
            </div>
        )
}
