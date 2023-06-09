import React, { useState, useEffect } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBInput,
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap";
import {
    useGetAccountQuery,
    useEditAccountMutation,
    useLogoutMutation,
    useGetUserReservationsQuery,
    useDeleteAccountMutation
} from "../redux/apiSlice";
import ReviewForm from "../ReviewForm";

function Profile() {
    const {data: account} =  useGetAccountQuery();
    const [changedAccount, setChangedAccount] = useState({
        first_name: '',
        last_name: '',
        email: ''
    })
    const reservationsQuery = useGetUserReservationsQuery();
    const reservations = reservationsQuery.data?.reservations;
    const [accountChange] = useEditAccountMutation();
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();
    const [deleteAccount] = useDeleteAccountMutation();
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [showEditResForm, setShowEditResForm] = useState(false);
    const [selectedReservationId, setSelectedReservationId] = useState(null);
    const [selectedCabinId, setSelectedCabinId] = useState(null);
    const [showDeleteAccountConfirm, setShowDeleteAccountConfirm] = useState(false);

    useEffect(() => {
        if (account) {
            setChangedAccount({ ...account });
        }
    }, [account]);

    if (!account || !reservations) {
        return (<h1>Loading...</h1>);
    }

    const changeField = (e) => {
        const { value } = e.target;
        const { name } = e.target;
        setChangedAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, ...updatedAccount } = changedAccount; // Remove 'id' from the account object
        accountChange(updatedAccount);
        logout();
        navigate("/signin");
    };

    const handleDelete = (e) => {
        deleteAccount();
        logout();
        navigate("/signup");
    };

    const reservationsForSort = [...reservations];


    return (
    <MDBContainer>
        <div className="profile">
            <h1>My Profile</h1>
            <Form>
                <MDBRow>
                    <MDBCol>
                        <div className="input-wrapper">
                            <MDBInput label='First name' id="first_name" name="first_name" type="text" value={changedAccount.first_name} onChange={changeField} />
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <div className="input-wrapper">
                            <MDBInput  label='Last name' id="last_name" name="last_name" type="text" value={changedAccount.last_name} onChange={changeField} />
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <div className="input-wrapper">
                            <MDBInput label='Email' id="email" name="email" type="email" value={changedAccount.email} onChange={changeField} />
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn outline rounded block className='mx-2' color='info' onClick={handleSubmit}>
                        Save Changes</MDBBtn>
                </MDBCol>
            </MDBRow>
            </Form>
            <MDBRow>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol></MDBCol>
                <MDBCol>
                    <MDBBtn outline rounded block className='mx-2' color='danger' onClick={() => setShowDeleteAccountConfirm(true)}>
                        Delete Profile</MDBBtn>
                </MDBCol>
            </MDBRow>



        <h1>Reservation History</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Cabin</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Number of Guests</th>
                </tr>
            </thead>
            <tbody>
                {reservationsForSort.sort((a, b) => a.start_date - b.start_date).map(reservation => {
                    let buttonDisplay;
                    let currDay = new Date()
                    let startDay = new Date(reservation.start_date)
                    if (startDay <= currDay){
                    buttonDisplay = <MDBBtn
                                    outline
                                    className='mx-2'
                                    color='success'
                                    onClick={() => {setShowReviewForm(true);
                                                    setSelectedReservationId(reservation.id);
                                                    setSelectedCabinId(reservation.cabin_id);
                                                }}>Give Feedback</MDBBtn>
                    } else {
                        buttonDisplay = <MDBBtn
                                    outline
                                    className='mx-2'
                                    color='info'
                                    onClick={() => {setShowEditResForm(true);
                                                    setSelectedReservationId(reservation.id);
                                                }}>Edit Reservation</MDBBtn>
                        }
                    return (<tr key={reservation.id}>
                        <td>{reservation.cabin_name}</td>
                        <td>{reservation.start_date}</td>
                        <td>{reservation.end_date}</td>
                        <td>{reservation.number_of_people}</td>
                        <td>{buttonDisplay}</td>
                        </tr>
                    );
                    })}
            </tbody>
        </table>
        <MDBModal show={showReviewForm} setShow={setShowReviewForm} tabIndex='0'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Leave Us Feedback For Your Stay</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <ReviewForm reservation={selectedReservationId} cabin={selectedCabinId}/>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        <MDBModal show={showEditResForm} setShow={setShowEditResForm} tabIndex='0'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Edit Details of Reservation</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <h1>Reservation edit form here</h1>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        <MDBModal show={showDeleteAccountConfirm} setShow={setShowDeleteAccountConfirm} tabIndex='0'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Are you sure you want to delete your account?</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>

                        <MDBBtn outline rounded block className='mx-2' color='danger' onClick={handleDelete}>
                            Delete Profile</MDBBtn>
                            <MDBBtn outline rounded block className='mx-2' color='danger' onClick={() => setShowDeleteAccountConfirm(false)}>
                                Cancel</MDBBtn>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </div>
    </MDBContainer>
    );
}

export default Profile;
