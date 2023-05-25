import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBFooter } from "mdb-react-ui-kit";



export default function Footer() {

	return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>

            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
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
              className="footer-logo"
              src="https://previews.dropbox.com/p/thumb/AB5xuQ08JucnkpSHnRYNVp45P0gmwiR4fctUn-m4FD1Bc79A6O3tuy2X5hT2yRDBI2fgIARM-N8fPzrvsKo5B-vbQuorYcobJ8zyEw1AQ7K1rYxkULXNprGlYvvkQmDn1yd1tcgGjBIgTGquIfsfJEG8Wl_Ui7xQFisbn2fb0uYNFctMot7w1NxcvuHzvCCpdqShRJWMXwrukezIE5f-VXUzOD95eNT2MyoM-aRzeyaHAJOu0LfQxf57bXyUFCSJzRD7BAIxOkBMkRlnOg6Eiy9V6lE868CG709MubJ_LCmNOvvRj5QITZ8mk-FbU9EqrQDKl3Ga-QYJOjgU5h2TZFv1W0_vcdj1tooZHVK_IaNfAcZELYf9rC-jbQuHRPXQbpQ/p.png"
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
