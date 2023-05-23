import React, { useState, useEffect } from "react";
import CabinCarousel from "./CabinCarousel";
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";




function CabinDetail() {
    const[cabin, setCabin] = useState({})
    const fetchData = async () => {
        const url = `http://localhost:8000/api/cabins/2`;
        try {

            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setCabin(data)

            } else {
                console.error(response);
            };

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!cabin.cabin_images) return <div>loading...</div>

    return (
      <>
        <MDBContainer className="gx-4 mt-4">
          <MDBRow className="d-flex justify-content-center mb-4">
            <MDBCol md="8" className="mt-5">
              <div className="carousel-wrapper w-100 ">
                <CabinCarousel images={cabin.cabin_images} />
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow id="cabin-info" className="gx-5 mb-5 justify-content-center">
            <MDBCol md="4" className="text-center" id="rate">
              <p>${(cabin.day_rate / 100).toFixed(2)} night</p>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <MDBBtn id="book-now" className="me-1" color="success">
                Book Now
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="text-center" id="rating">
              {cabin.rating} <span>&#9734;</span>
            </MDBCol>
          </MDBRow>
          <MDBRow id="cabin-description" className="gx-4">
            <p>{cabin.description}</p>
          </MDBRow>
        </MDBContainer>
      </>
    );
}


export default CabinDetail
