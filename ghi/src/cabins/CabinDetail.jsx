import CabinCarousel from "./CabinCarousel";
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useGetCabinByIdQuery, useGetReviewsByCabinQuery } from "../redux/apiSlice";
import { useParams, Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { assignCabin } from "../redux/cabinIDSlice";

function CabinDetail() {
  const { cabin_id } = useParams();
  const { data, isLoading } = useGetCabinByIdQuery(cabin_id);
  const reviews = useGetReviewsByCabinQuery(cabin_id)?.data?.reviews
  const dispatch = useDispatch();

  if (isLoading || !reviews ) return <div>loading...</div>;

  const avgRatingForCabin = (cabin_id) => {
      const ratings = reviews.map((review) => review.rating);
      const sum = ratings.reduce((total, rating) => total + rating, 0);
      if (ratings.length !== 0) {
        const average = sum / ratings.length;
        return average;
      } else {
        return "No ratings yet!"
    }
  };

  const getDayWithSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return day + "th";
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
};

  const formattedDate = (review) => {
    const createdAtDate = new Date(review.created_at);
    const day = createdAtDate.getDate();
    const formattedDate = createdAtDate.toLocaleDateString(undefined, {
      month: "long",
    });
    const formattedDay = getDayWithSuffix(day);
    return `${formattedDate} ${formattedDay}`
  }

  return (
    <>
      <MDBContainer className="gx-4 mt-4 mb-5">
        <h1>{data.cabin_name}</h1>
        <MDBRow className="d-flex justify-content-center mb-4">
          <MDBCol md="8" className="mt-5">
            <div className="carousel-wrapper w-100 ">
              <CabinCarousel images={data.cabin_images} />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow id="cabin-info" className="gx-5 mb-5 justify-content-center">
          <MDBCol md="4" className="text-center" id="rate">
            <p>${(data.day_rate / 100).toFixed(2)} night</p>
          </MDBCol>
          <MDBCol md="4" className="text-center">
            <Link
              onClick={() => dispatch(assignCabin(data.id))}
              to="/reservations"
            >
              <MDBBtn id="book-now" className="me-1" color="danger" block>
                Book This Cabin
              </MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol md="4" className="text-center" id="rating">
            {avgRatingForCabin()} <span>&#9734;</span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="shadow-5 mb-5 rounded-4">
        <MDBRow id="cabin-description" className="gx-4">
          <p>{data.description}</p>
        </MDBRow>
      </MDBContainer>
      <h2>Reviews For {data.cabin_name} Cabin</h2>
      <table className="table table-striped">
        <tbody>
          {reviews.map(review => {
              return (<tr key={review.id}>
                  <td>{review.rating} <span>&#9734;</span></td>
                  <td>{review.comment}</td>
                  <td>{formattedDate(review)}</td>
                </tr>
              );
              })}
        </tbody>
      </table>
    </>
  );
}

export default CabinDetail;
