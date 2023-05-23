import React, { useState, useEffect } from "react";
import CabinCarousel from "./CabinCarousel";
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useGetCabinByIdQuery } from "./app/apiSlice";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";



function CabinDetail() {
  const cabin_id = 2
  const { data, isLoading } = useGetCabinByIdQuery(cabin_id);
  
    if (isLoading) return <div>loading...</div>

    return (
      <>
        <MDBContainer className="gx-4 mt-4">
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
              <MDBBtn id="book-now" className="me-1" color="success">
                Book Now
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="text-center" id="rating">
              {data.rating} <span>&#9734;</span>
            </MDBCol>
          </MDBRow>
          <MDBRow id="cabin-description" className="gx-4">
            <p>{data.description}</p>
          </MDBRow>
        </MDBContainer>
      </>
    );
}


export default CabinDetail
