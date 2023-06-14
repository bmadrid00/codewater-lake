import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useEditReservationMutation, useGetUserReservationsQuery } from "../redux/apiSlice"

function EditReservation(props) {
    const [edit] = useEditReservationMutation();
    const reservationsQuery = useGetUserReservationsQuery();
    const [updatedRes, setUpdatedRes] = useState({
        cabin_id: '',
        start_date: '',
        end_date: '',
        user_id: '',
        number_of_people: 0,
    })
    const reservations = reservationsQuery.data?.reservations;
    const reservationId = props.id;

    useEffect( () => {
        for (let res of reservations) {
            if (res.id === reservationId) {
                setUpdatedRes({
                    cabin_id: res.cabin_id,
                    start_date: res.start_date,
                    end_date: res.end_date,
                    user_id: res.user_id,
                    number_of_people: res.number_of_people
                })
            }
        }
    }, [reservations, props.id])

    const changeField = (e) => {
        const { value } = e.target;
        const { name } = e.target;
        setUpdatedRes((prevRes) => ({
            ...prevRes,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        edit({ reservationId , ...updatedRes });
    };

    return (
        <Form>
            <div className="input-wrapper">
                <MDBInput label='Start Date' id="start_date" name="start_date" type="date" value={updatedRes.start_date} onChange={changeField} />
            </div>
            <div className="input-wrapper">
                <MDBInput  label='End Date' id="end_date" name="end_date" type="date" value={updatedRes.end_date} onChange={changeField} />
            </div>
            <div className="input-wrapper">
                <MDBInput label='Number of Occupants' id="number_of_people" name="number_of_people" type="number" value={updatedRes.number_of_people} onChange={changeField} />
            </div>
            <MDBBtn outline rounded block className='mx-2' color='info' onClick={handleSubmit}>
            Save Changes</MDBBtn>
        </Form>
    )
}

export default EditReservation;
