import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useDispatch } from 'react-redux';
import { setDateRange } from '../redux/calendarSlice';
import { useGetAccountQuery, useGetReservationsQuery, useBookReservationMutation } from '../redux/apiSlice'
import ReservationForm from './BookReservation';
// import { useLoginMutation } from "../redux/reservationsSlice";



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
    .catch(failureCallback);}


export default function ResCalendar() {
    const dispatch = useDispatch();
    const [bookReservation] = useBookReservationMutation();
    const {data, isLoading} = useGetReservationsQuery();
    const reservations = data?.reservations;
    console.log(useGetReservationsQuery);
    const[selectedDates, setSelectedDates] = useState(null);
    const[selectedCabin, setSelectedCabin] = useState(null);
    const {data: account} = useGetAccountQuery();

    useEffect(() => {
        // const { data: cabinsData = [], isLoading: isLoadingCabins } = useGetCabinsQuery();
        // console.log(cabinsData);
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

    const handleDateSelect = (selectInfo) => {
        dispatch(setDateRange({
            start_date: selectInfo.startStr,
            end_date: selectInfo.endStr,
        }));
    }


    // const selectedDates = useSelector(state => state.calendar.dateRange); // gets selected dates from store
    const handleSave = async () => {

        if (!selectedDates) {
            alert('Please select a date range first.');
            return;
        }
        try {
            const response = await bookReservation(selectedDates).unwrap(); // passes selection to redux mutation
            alert('Date range saved successfully!');
            dispatch(setDateRange(null));  // clear the selection
        } catch(error) {
            console.error('Error:', error);
            alert('An error occurred while saving the date range.');
        }
    }

    // const { data: { reservations = [] } = {}, isLoading, error } = useGetReservationsQuery();

    // if (error) {
    //     console.error('Error fetching reservations:', error);
    // }


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
{/* <div className="booking-container">
    <ReservationForm />
    <ResCalendar />
</div> */}

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
