import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";

function Cabins() {
  const [Cabins, setCabins] = useState([]);

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

  return (
    <>
      <h1>Cabins</h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {Cabins.map((cabin) => {
          return (
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardTitle>NAME: {cabin.cabin_name}</MDBCardTitle>
                <MDBCardImage
                  src="https://www.edinarealty.com/media/1857/buyalakehomeorcabintips.jpg?mode=crop&width=800&height=540"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardText>Description: {cabin.description}</MDBCardText>
                  <MDBCardText>
                    Max Occupants: {cabin.max_occupants}
                  </MDBCardText>
                  <MDBCardText>Located by lake: {cabin.on_lake}</MDBCardText>
                  <MDBCardText>Rating: {cabin.rating}</MDBCardText>
                  <MDBCardText>Daily Rate: ${cabin.day_rate}</MDBCardText>
                </MDBCardBody>
                <Button>Book</Button>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </>
  );
}

export default Cabins;
