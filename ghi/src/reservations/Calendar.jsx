import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useDispatch } from 'react-redux';
import { setDateRange } from '../redux/calendarSlice';
import { useGetAccountQuery, useGetReservationsQuery, useCreateReservationMutation } from '../redux/apiSlice'
import ReservationForm from './BookReservation';




const colorMap = {
    1: "blue",
    2: "magenta",
    3: "olive",
    4: "purple",
    5: "pink",
    6: "orange",

}

function fetchReservations(fetchInfo, successCallback, failureCallback) {
    fetch('http://localhost:8000/api/reservations')
        .then(response => response.json())
        .then(data => {
    const events = data.reservations.map(reservation => ({
        start: reservation.start_date,
        end: reservation.end_date,
        title: `Cabin ${reservation.cabin_id} reserved`,
        color: colorMap[reservation.cabin_id] || "gray",
    }));
    successCallback(events);
    })
    .catch(failureCallback);
}


export default function ResCalendar() {
    const dispatch = useDispatch();
    const [createReservation] = useCreateReservationMutation();
    const {data: reservations} = useGetReservationsQuery();
    const[selectedDates, setSelectedDates] = useState(null);
    const[selectedCabin, setSelectedCabin] = useState(null);
    const {data: account} = useGetAccountQuery();

    useEffect(() => {
        if (reservations) {
            const events = reservations.map(reservation => ({
                start: reservation.start_date,
                end: reservation.end_date,
                title: `Cabin ${reservation.cabin_id} reserved`,
                color: colorMap[reservation.cabin_id] || "gray",
            }));
            // update calendar with new events
        }
    }, [reservations]);

    const handleDateSelect = async (selectInfo) => {
        dispatch(setDateRange({
            start_date: selectInfo.startStr,
            end_date: selectInfo.endStr,
        }));
        try {
            await createReservation({
                start_date: selectInfo.startStr,
                end_date: selectInfo.startStr,
            }).unwrap();
        } catch (error) {
            console.error('Failed to create reservation:', error);
        }
        createReservation({
            start_date: selectInfo.startStr,
            end_date: selectInfo.endStr,
        })
    }





    const renderSidebar = () => {
        return (
            <div className="booking-container">
                <ResCalendar />
                <div className='sidebar'>
                    <ReservationForm />
                </div>
            </div>
        )
    }


    return (
        <div className="calendar-container">
            {renderSidebar()}
        <FullCalendar
        key={reservations ? reservations.length : 0}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
        selectable= "true"
        editable= "true"
        selectMirror= "true"
        initialView="dayGridMonth"
        events={fetchReservations}
        select={handleDateSelect}
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
