import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

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
export default class ResCalendar extends React.Component {

  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={fetchReservations}
        headerToolbar={{
            start: "dayGridMonth timeGridWeek timeGridDay",
            center: "title",
            end: "today prev,next",
        }}
        height={"80vh"}
      />
    )
  }
}
