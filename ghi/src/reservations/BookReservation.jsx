import React from "react";
import { useDispatch } from 'react-redux';
import { createReservation } from './reservationSlice';

function ReservationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const reservation = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            cabin: form.cabin.value,
            start_date: form.cabin.value,
            end_date: form.cabin.value


        };
        dispatch(createReservation(reservation));
    };
    return (
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Book Reservation</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name:</label>
                <input id="first_name" name="first_name" type="text" required />
                <label htmlFor="last_name">Last Name:</label>
                <input id="last_name" name="last_name" type="text" required />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="cabin">Cabin Selection:</label>
                <input id="cabin" name="cabin" type="int" required />
                <label htmlFor="start_date">Start Date:</label>
                <input id="start_date" name="start_date" type="date" required />
                <label htmlFor="end_date">End Date:</label>
                <input id="end_date" name="end_date" type="date" required />

                <button type="submit">Book It!</button>
                </form>
            </div>
        </div>
    )
}


export default ReservationForm;
