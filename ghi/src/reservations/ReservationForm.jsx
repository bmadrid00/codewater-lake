import React, { useEffect, useState } from "react";
import { useCreateReservationMutation, useGetCabinsQuery, useGetAccountQuery} from "../redux/apiSlice";


function ReservationForm({selectedDates}) {
    const [cabin, setCabin] = useState('');
    const [start_date, setStartDate] = useState(selectedDates?.start_date);
    const [end_date, setEndDate] = useState(selectedDates?.end_date);
    const [occupancy, setOccupancy] = useState(0)
    const { data:  cabinsData, isLoading: isLoadingCabins } = useGetCabinsQuery();
    const [usefulCabinsData, setUsefulCabinsData] = useState([])
    const [bookReservation] = useCreateReservationMutation();
    const {data: account} = useGetAccountQuery();


    useEffect(() => {
        setStartDate(selectedDates?.start_date);
        setEndDate(selectedDates?.end_date);
    }, [selectedDates]);

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
            user_id: account.id,
            number_of_people: form.occupancy.value,
            cabin_id: form.cabin.value,
            start_date: form.start_date.value,
            end_date: form.end_date.value
        };
        console.log(reservation)
        await bookReservation(reservation);

    }

    return (
    <div className="reservation-form-wrapper">
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Book Reservation</h5>
                <div className="card-body">
                    <form className="reservation-form" onSubmit={handleSubmit} id="create-reservation-form">
                        <label htmlFor="cabin">Cabin Selection:</label>
                        <select value={cabin} onChange={(e) => setCabin(e.target.value)} required name="cabin" id="cabin" className="form-select">
                            <option value="">Choose a cabin</option>
                            {usefulCabinsData.map(cabin => (
                                <option key={cabin.id} value={cabin.id}>{cabin.cabin_name}</option>
                            ))}
                        </select>
                        <label htmlFor="occupancy">Number of People</label>
                        <input value={occupancy} id="occupancy" name="occupancy" type="number" required onChange={(e) => setOccupancy(e.target.value)}/>
                        <label htmlFor="start_date">Start Date:</label>
                        <input value={start_date} id="start_date" name="start_date" type="date" required onChange={(e) => setStartDate(e.target.value)}/>
                        <label htmlFor="end_date">End Date:</label>
                        <input value={end_date} id="end_date" name="end_date" type="date" required onChange={(e) => setEndDate(e.target.value)}/>
                        <button className="btn btn-primary">Book It!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ReservationForm;
