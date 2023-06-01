import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useCreateReservationMutation, useGetCabinsQuery,} from "../redux/apiSlice";


function ReservationForm() {
    const dispatch = useDispatch();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cabin, setCabin] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const { data:  cabinsData, isLoading: isLoadingCabins } = useGetCabinsQuery();
    const [usefulCabinsData, setUsefulCabinsData] = useState([])
    const [bookReservation] = useCreateReservationMutation();


    useEffect(() => {
        if (cabinsData?.cabins) {
            setUsefulCabinsData([...cabinsData.cabins]);
        }
    }, [cabinsData]);


    if (isLoadingCabins) {
        return <h1>Loading...</h1>
    }


    async function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const reservation = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            cabin: form.cabin.value,
            start_date: form.start_date.value,
            end_date: form.end_date.value
        };
        await bookReservation(reservation);
        dispatch(bookReservation(reservation));
    }



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
                    <select value={cabin} onChange={(e) => setCabin(e.target.value)} required name="cabin" id="cabin" className="form-select">
                        <option value="">Choose a cabin</option>
                        {usefulCabinsData.map(cabin => (
                            <option key={cabin.id} value={cabin.id}>{cabin.cabin_name}</option>
                        ))}
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
