import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBFooter } from "mdb-react-ui-kit";



export default function Footer() {

	return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted footer-element"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <i className="fas fa-campground"></i>
            <i className="fas fa-wifi"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="text-center">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            </MDBRow>
            <MDBRow className="mt-3">
              <MDBCol className="text-center">
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Kings Point, MT 10012, US
                </p>
              </MDBCol>
              <MDBCol className="text-center">
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@codewatercabins.com
                </p>
              </MDBCol>
              <MDBCol className="text-center">
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234.567.8910
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="footer text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <div>
            <img
              alt="logo"
              className="footer-logo"
              src="https://dl.dropboxusercontent.com/s/j268a6rjz1almh3/logo-black.png"
            />
          </div>

          <div className="footer-logo-text">
            <p>Codewater Cabins</p>
          </div>
        </div>
      </MDBFooter>
    </>
  );
}
