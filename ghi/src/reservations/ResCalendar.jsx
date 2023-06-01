import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useGetReservationsQuery } from '../redux/apiSlice'

const colorMap = {
    1: "blue",
    2: "magenta",
    3: "olive",
    4: "purple",
    5: "pink",
    6: "orange",

}


export default function ResCalendar(props) {
    const {data: reservations} = useGetReservationsQuery();
    const [events, setEvents] = useState([])

    useEffect(() => {
        if (reservations) {
            const eventsForCal = reservations.reservations.map(reservation => ({
                start: reservation.start_date,
                end: reservation.end_date,
                title: `Cabin ${reservation.cabin_id} reserved`,
                color: colorMap[reservation.cabin_id] || "gray",
            }));
            setEvents([...eventsForCal])
        }
    }, [reservations]);


    if (!reservations) {
            return <h1>Loading...</h1>
        }


    return (
        <div className="calendar-container">
            <FullCalendar
            key={reservations ? reservations.length : 0}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
            selectable= "true"
            editable= "true"
            selectMirror= "true"
            initialView="dayGridMonth"
            events={events}
            select={props.onDateSelect}
            headerToolbar={{
                start: "",
                center: "title",
                end: "today prev,next",
            }}
            height={"80vh"}
            />
        </div>
    )
}
