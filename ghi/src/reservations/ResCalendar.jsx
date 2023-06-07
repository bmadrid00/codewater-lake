import React, { useState, useEffect, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useGetReservationsQuery, useGetCabinsQuery } from '../redux/apiSlice'

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
    const { data:  cabinsData, isLoading: isLoadingCabins } = useGetCabinsQuery();
    const [usefulCabinsData, setUsefulCabinsData] = useState([])

    const cabinNames = (reservation) => {
            for (let cabin of usefulCabinsData) {
                if (cabin?.id  == reservation.cabin_id) {
                    return cabin.cabin_name
                }
            }
        }

    useEffect(() => {
        if (cabinsData?.cabins) {
            setUsefulCabinsData([...cabinsData.cabins]);
        }
    }, [cabinsData])


    useEffect(()=> {
        if (reservations && usefulCabinsData.length > 0) {
            const eventsForCal = reservations.reservations.map(reservation => {
                const endDateObj = new Date(reservation.end_date);
                endDateObj.setDate(endDateObj.getDate() + 1);
                const adjustedEndDate = endDateObj.toISOString().split("T")[0]
                return {start: reservation.start_date,
                end: adjustedEndDate,
                title: cabinNames(reservation) + ` cabin reserved`,
                color: colorMap[reservation.cabin_id] || "gray",
            }});
            setEvents(() => eventsForCal)
        }
    }, [reservations, usefulCabinsData]);

    const calendarRef = useRef(null);

    const [currentView, setCurrentView] = useState('dayGridMonth');

    const handleToggleView = () => {
        let calendarApi = calendarRef.current.getApi();
        if (calendarApi.view.type === 'dayGridMonth') {
            calendarApi.changeView('multiMonthYear');
        } else {
            calendarApi.changeView('dayGridMonth');
        }
    }


    return (
        <div className="calendar-container">
            <FullCalendar
            ref={calendarRef}
            key={reservations ? reservations.length : 0}
            plugins={[ dayGridPlugin, interactionPlugin, multiMonthPlugin]}
            selectable= "true"
            // editable= "true"
            selectMirror= "true"
            initialView={currentView}
            events={events}
            select={props.onDateSelect}
            headerToolbar={{
                start: "multiMoView",
                center: "title",
                end: "today prev,next",
            }}
            customButtons={{
                multiMoView: {
                    text: 'Extended view',
                    click: handleToggleView,
                },
            }}
            height={"80vh"}
            />
        </div>
    )
}
