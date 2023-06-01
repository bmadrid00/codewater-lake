import React, { useState, useEffect } from "react";
import {
    MDBBtn,
    MDBInput
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap";
import {
    useGetAccountQuery,
    useEditAccountMutation,
    useLogoutMutation,
    useGetReservationsQuery
} from "../redux/apiSlice";

function Profile() {
    const {data: account} =  useGetAccountQuery();
    const [changedAccount, setChangedAccount] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })
    const reservations = useGetReservationsQuery()?.data?.reservations
    const [accountChange] = useEditAccountMutation()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()


    useEffect(() => {
        if (account) {
            setChangedAccount({ ...account });
        }
    }, [account]);

    if (!account || !reservations) {
        return (<h1>Loading...</h1>)
        }

    const changeField = (e) => {
        const { value } = e.target;
        const { name } = e.target;
        setChangedAccount({
            ...changedAccount,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        delete changedAccount['id']
        console.log(changedAccount)
        accountChange(changedAccount);
        logout();
        navigate("/signin");
    }

    const reservationsForSort = [...reservations]

    return (
    <div className="profile">
        <h1>My Profile</h1>
        <Form>
            <div className="input-wrapper">
            <MDBInput className="mb-2" label='First name' id="first_name" name="first_name" type="text" value={changedAccount.first_name} onChange={changeField} />
            </div>
            <div className="input-wrapper">
            <MDBInput className="mb-2" label='Last name' id="last_name" name="last_name" type="text" value={changedAccount.last_name} onChange={changeField} />
            </div>
            <div className="input-wrapper">
            <MDBInput className="mb-2"label='Email' id="email" name="email" type="email" value={changedAccount.email} onChange={changeField} />
            </div>
            <MDBBtn outline rounded className='mx-2 mb-5' color='info' onClick={handleSubmit}>
                Save Changes
            </MDBBtn>
        </Form>
        <h1>Reservation History</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Cabin ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Number of Guests</th>
                </tr>
            </thead>
            <tbody>
                {reservationsForSort.sort((a, b) => a.start_date - b.start_date).map(reservation => {
                    return (<tr key={reservation.id}>
                        <td>{reservation.cabin_id}</td>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                        <td>{reservation.number_of_people}</td>
                        </tr>
                    );
                    })}
            </tbody>
        </table>
    </div>
    );
}

export default Profile;
