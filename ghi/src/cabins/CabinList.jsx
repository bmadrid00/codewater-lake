import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useGetReviewsQuery } from "../redux/apiSlice";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { assignCabin } from "../redux/cabinIDSlice";

function Cabins() {
  const dispatch = useDispatch();

  const [Cabins, setCabins] = useState([]);
  const reviews = useGetReviewsQuery().data?.reviews
  const [reviewsForSort, setReviewsForSort] = useState([])

  useEffect(()=> {
    if (reviews) {
      setReviewsForSort([...reviews])
    }
  }, [reviews])



  const fetchData = async () => {
    const url = "http://localhost:8000/api/cabins/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      for (let cabin of data.cabins) {
        if (cabin.on_lake === true) {
          cabin["on_lake"] = "Yes";
        } else {
          cabin["on_lake"] = "No";
        }
      }
      setCabins(data.cabins);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const avgRatingForCabin = (cabin_id) => {
    if (reviewsForSort !== null) {
      const filteredReviews = reviewsForSort.filter((review) => review.cabin_id === cabin_id);
      const ratings = filteredReviews.map((review) => review.rating);
      const sum = ratings.reduce((total, rating) => total + rating, 0);
      if (ratings.length !== 0) {
        const average = sum / ratings.length;
        return average;
      } else {
        return "No ratings yet!"
      }
    }
  };

  return (
    <>
      <div className="cabins">
        <h1>Cabins</h1>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {Cabins.map((cabin) => {
            return (
              <MDBCol key={cabin.id}>
                <MDBCard className="h-100">
                  <MDBCardTitle>{cabin.cabin_name}</MDBCardTitle>
                  <Link to={`/cabins/${cabin.id}`}>
                    <MDBCardImage
                      src={cabin.cabin_images[0]}
                      alt={cabin.cabin_name}
                      position="top"
                    />
                  </Link>
                  <MDBCardBody>
                    <MDBCardText>
                      Max Occupants: {cabin.max_occupants}
                    </MDBCardText>
                    <MDBCardText>Located by lake: {cabin.on_lake}</MDBCardText>
                    <MDBCardText>
                      Rating: {avgRatingForCabin(cabin.id)}
                      <span>&#9734;</span>
                    </MDBCardText>
                    <MDBCardText>
                      Daily Rate: ${(cabin.day_rate / 100).toFixed(2)}
                    </MDBCardText>
                  </MDBCardBody>
                  <Link
                    onClick={() => dispatch(assignCabin(cabin.id))}
                    to="/reservations"
                  >
                    <MDBBtn block>Book</MDBBtn>
                  </Link>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </>
  );
}

export default Cabins;
