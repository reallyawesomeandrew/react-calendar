import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CalendarCell } from './CalendarCell';
import { Loading } from './Loading';
import { Error } from "./Error";
export const CalendarCells = ({month, events}) => {
    const { loading,error } = useContext(GlobalContext);
    const today = new Date();
    function getDaysOfMonth(month,year) {
        return new Date(year, parseInt(month)+1, 0).getDate();
    }
    function getDayOfWeekFirstDay(month, year){
        return new Date(year, month, 1).getDay();
    }

    let calendarStuff = [];
    const num = getDaysOfMonth(month, today.getFullYear());


    const noNum = getDayOfWeekFirstDay(month, today.getFullYear());
    for (let index = 0; index < noNum; index++) {
       const element = <CalendarCell newDate={null} events={[]} key={index}/>
       calendarStuff.push(element);
    }
    for (let index = 1; index <= num; index++) {
        const CompareDate = new Date(today.getFullYear(), parseInt(month), index);
        let eventParam = [];
        events.forEach(event => {
            const newDateObject = new Date(event.day);
            if((newDateObject.getFullYear() === CompareDate.getFullYear() && newDateObject.getMonth() === CompareDate.getMonth()) && newDateObject.getDate() === CompareDate.getDate()){
                eventParam.push(event);
            }
        }
        )
        const element = <CalendarCell newDate={CompareDate} events={eventParam} key={CompareDate.toISOString()}/>
        calendarStuff.push(element);
        
    }
    return (
        <div>
            {   
                loading === false? (
                    error === false?
                <div id="calendar-main">
                    {calendarStuff}
                </div>: <div><Error/>
                 <div id="calendar-main">
                    {calendarStuff}
                </div></div>
                )
                : <div>
                    <Loading/>
                    <div id="calendar-main">
                        {calendarStuff}
                    </div>
                </div>
            }
        </div>

    )
}
