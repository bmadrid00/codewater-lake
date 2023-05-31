import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useBookReservationMutation, useGetCabinsQuery, useGetReservationsByCabinQuery } from "../redux/apiSlice";



function ReservationForm() {
    const dispatch = useDispatch();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cabin, setCabin] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const { data: cabinsData = [], isLoading: isLoadingCabins } = useGetCabinsQuery();
    const [usefulCabinsData, setUsefulCabinsData] = useState([])
    // console.log(cabinsData);
    // const [ selectedCabin, setSelectedCabin ] = useState(null);
    // const { data: reservations = [], isLoading: isLoadingReservations } = useGetReservationsByCabinQuery(selectedCabin);
    const [bookReservation, result] = useBookReservationMutation();


    // useEffect(()=> {
    //     if (cabinsData) {
    //         setUsefulCabinsData([...cabinsData])
    //     }
    // })

    async function handleSubmit(e){
        e.preventDefault();
        await bookReservation({first_name, last_name, email, cabin, start_date, end_date});

        const form = e.target;
        const reservation = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            cabin: form.cabin.value,
            start_date: form.start_date.value,
            end_date: form.end_date.value

        };
        dispatch(bookReservation(reservation));
    }

    // if (response.ok) {
    //     setFormData({
    //         first_name: '',
    //         last_name: '',
    //         email: '',
    //         cabin: '',
    //         start_date: '',
    //         end_date: '',
    //     });
    // }

    // const handleFormChange = (e) => {
    //     const value = e.target.value;
    //     const inputName = e.target.name;
    //     setFormData({
    //         ...formData,
    //         [inputName]: value,
    //     });
    // }

    return (
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Book Reservation</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit} id="create-reservation-form">
                <label htmlFor="first_name">First Name:</label>
                <input value={first_name} id="first_name" name="first_name" type="text"
                required onChange={(e) => setFirstName(e.target.value)}/>
                <label htmlFor="last_name">Last Name:</label>
                <input value={last_name} id="last_name" name="last_name" type="text"
                required onChange={(e) => setLastName(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input value={email} id="email" name="email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="cabin">Cabin Selection:</label>
                <select onChange={handleSubmit} required name="cabin" id="cabin" className="form-select">
                <option value="">Choose a cabin</option>
                {usefulCabinsData.map(location => {
                    return (
                        <option key={cabin.id} value={cabin.id}>{cabin.name}</option>
                    )
                })}
                </select>
                <label htmlFor="start_date">Start Date:</label>
                <input value={start_date} id="start_date" name="start_date" type="date" required onChange={(e) => setStartDate(e.target.value)}/>
                <label htmlFor="end_date">End Date:</label>
                <input value={end_date} id="end_date" name="end_date" type="date" required onChange={(e) => setEndDate(e.target.value)}/>

                <button className="btn btn-primary">Book It!</button>
                </form>
            </div>
        </div>

    )
}


export default ReservationForm;
