import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import Calendar from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { useGetAccountQuery } from '../redux/apiSlice'


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
  const[selectedDates, setSelectedDates] = useState(null);
  const {data: account} = useGetAccountQuery();
  const handleDateSelect = (selectInfo) => {
    setSelectedDates({
      start_date: selectInfo.startStr,
      end_date: selectInfo.endStr,
    })
  }
  const handleSave = () => {
    if (!selectedDates) {
      alert('Please select a date range first.');
      return;
    }
    fetch(`http://localhost:8000/api/users/${account.id}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedDates),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      alert('Date range saved successfully!');
      setSelectedDates(null);  // clear the selection
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred while saving the date range.');
    });
  }



  return (
  <div className="calendar-container">
      <div className="sidebar">
        <h2>Select Date Range</h2>
        <p>This is some additional content that will display next to the calendar.</p>
        <button onClick={handleSave}>Book</button>
      </div>
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
      selectable= "true"
      editable= "true"
      selectMirror= "true"
      initialView="multiMonthYear"
      events={fetchReservations}
      select={handleDateSelect}
      headerToolbar={{
          start: "dayGridMonth timeGridWeek timeGridDay",
          center: "title",
          end: "today prev,next",
      }}
      // height={"80vh"}

    />
  </div>
  )
}
