import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Calendar } from '@fullcalendar/core'
import multiMonthPlugin from '@fullcalendar/multimonth'


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

// function createReservationPlan()
// pass

export default class ResCalendar extends React.Component {

  render() {

    return (
    <   div className="calendar-container">
        <div className="sidebar">
          <h2>Select Date Range</h2>
          <p>This is some additional content that will display next to the calendar.</p>
          {/* Add more HTML elements here as needed */}
        </div>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, multiMonthPlugin]}
        selectable= "true"
        editable= "true"
        selectMirror= "true"
        initialView="multiMonthYear"
        events={fetchReservations}
        // select: function(start, end) {
        //     var title = prompt("Cabin res info:");
        //     var resData;
        //     if (title) {
        //         resData = {
        //             title: title,
        //             start: start,
        //             end: end
        //         };
        //         $("#calendar").FullCalendar("renderEvent", resData, true);
        //     }
        //     $("#calendar").FullCalendar("unselect");
        // }
        // }

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
}
