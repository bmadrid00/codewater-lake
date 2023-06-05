import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Signup from "../users/Signup";
import Signin from "../users/Signin";
import { useNavigate } from "react-router-dom";
import {
  useCreateReservationMutation,
  useGetCabinsQuery,
  useGetAccountQuery,
} from "../redux/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { assignCabin } from "../redux/cabinIDSlice";

function ReservationForm(props) {

  const cabinID = useSelector((state) => state.cabinID.id);
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState(props.selectedDates?.start_date);
  const [end_date, setEndDate] = useState(props.selectedDates?.end_date);
  const [occupancy, setOccupancy] = useState(0);
  const [signInError, setSignInError] = useState(false);
  const { data: cabinsData, isLoading: isLoadingCabins } = useGetCabinsQuery();
  const [usefulCabinsData, setUsefulCabinsData] = useState([]);
  const [bookReservation] = useCreateReservationMutation();
  const { data: account } = useGetAccountQuery();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setStartDate(props.selectedDates?.start_date);
    setEndDate(props.selectedDates?.end_date);
  }, [props.selectedDates]);

  useEffect(() => {
    if (cabinsData?.cabins) {
      setUsefulCabinsData([...cabinsData.cabins]);
    }
  }, [cabinsData]);

  if (isLoadingCabins) {
    return <h1>Loading...</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (account == null) {
      setSignInError(true);
    }
    const form = e.target;
    const reservation = {
      user_id: account.id,
      number_of_people: form.occupancy.value,
      cabin_id: form.cabin.value,
      start_date: form.start_date.value,
      end_date: form.end_date.value,
    };
    console.log(reservation);
    await bookReservation(reservation);
  }

  let displayForm;

  if (showLogin) {
    displayForm = (
      <div>
        <Signin />
        <MDBModalFooter>
          <div>Don't have an account yet?</div>
          <MDBBtn color="success" onClick={() => setShowLogin(false)}>
            Create Account
          </MDBBtn>
        </MDBModalFooter>
      </div>
    );
  } else {
    displayForm = (
      <div>
        <Signup />
        <MDBModalFooter>
          <div>Already have an account?</div>
          <MDBBtn color="success" onClick={() => setShowLogin(true)}>
            Login
          </MDBBtn>
        </MDBModalFooter>
      </div>
    );
  }

  return (
    <div>
      <MDBModal show={signInError} setShow={setSignInError} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Error Creating Reservation</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              Please sign in or create a valid account to make a reservation.
            </MDBModalBody>
            {displayForm}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div className="card text-bg-light mb-3">
        <h5 className="card-header">Book Reservation</h5>
        <div className="card-body">
          <form
            className="reservation-form"
            onSubmit={handleSubmit}
            id="create-reservation-form"
          >
            <div className="input-wrapper">
                <label htmlFor="cabin">Cabin Selection:</label>
                <select
                    key="cabin"
                    value={cabinID}
                    onChange={(e) => {
                    dispatch(assignCabin(e.target.value));
                    }}
                    required
                    name="cabin"
                    id="cabin"
                    className="form-select"
                >
                    <option key={0} value="">Choose a cabin</option>
                    {usefulCabinsData.map((cabin) => (

                        <option key={cabin.id} value={cabin.id}>
                            {cabin.cabin_name}
                        </option>
                    ))}
                </select>
            </div>
            <label htmlFor="occupancy">Number of People</label>
            <input
                key="occupancy"
                value={occupancy}
                id="occupancy"
                name="occupancy"
                type="number"
                required
                onChange={(e) => setOccupancy(e.target.value)}
            />
            <label htmlFor="start_date">Start Date:</label>
            <input
                key="start_date"
                value={start_date}
                id="start_date"
                name="start_date"
                type="date"
                required
                onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="end_date">End Date:</label>
            <input
                key="end_date"
                value={end_date}
                id="end_date"
                name="end_date"
                type="date"
                required
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button className="btn btn-primary">Book It!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
