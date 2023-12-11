"use client"
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-ie": require("date-fns/locale/en-IE")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Presentation",
        start: new Date(2023, 11, 12),
        end: new Date(2023, 11, 12),
    },

    {
        title: "Exams",
        allDay: true,
        start: new Date(2023, 11, 12),
        end:new Date(2023, 11, 12)
    },

    {
        title: "Meeting",
        start: new Date(2023, 11, 12),
        end: new Date(2023, 11, 14)
    },
]
   

export default function calendarMain () {
    const[newEvent, setNewEvent]=useState({title: "", start: "", end: ""})
    const[allEvents, setAllEvents]=useState(events)

    function handleAddEvents(){
        setAllEvents([...allEvents, newEvent])
    }

    
  return (
    <div style={{marginTop:"50px"}}>
        <h1>Calendar</h1>
        <h2>add new event</h2>
            <div>
                <input type="text" placeholder="Add title" style={{width: "20%", marginRight: "10px"}}
                value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>

                <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start: start})}/>

                <DatePicker placeholderText="End Date" style={{marginRight: "10px"}}
                selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end: end})}/>

                <button onClick={handleAddEvents}>Add Event</button>
            </div>
        <Calendar localizer={localizer} events={allEvents} 
        startAccessor="start" endAccessor="end" style={{height: 600, margin: "50px"}}/>
    </div>
  )
}
