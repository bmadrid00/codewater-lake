import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import { AllReservationList } from '../reservations';

function ResCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={null} />
    </div>
  );
}

export default ResCalendar;
