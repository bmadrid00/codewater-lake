import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";



export default function Footer() {

	return (
	  <MDBContainer className="mb-4">
			<MDBRow className="text-center">
			<div className="footer">
				<div>
					<img
						className="footer-logo"
						src="https://previews.dropbox.com/p/thumb/AB5xuQ08JucnkpSHnRYNVp45P0gmwiR4fctUn-m4FD1Bc79A6O3tuy2X5hT2yRDBI2fgIARM-N8fPzrvsKo5B-vbQuorYcobJ8zyEw1AQ7K1rYxkULXNprGlYvvkQmDn1yd1tcgGjBIgTGquIfsfJEG8Wl_Ui7xQFisbn2fb0uYNFctMot7w1NxcvuHzvCCpdqShRJWMXwrukezIE5f-VXUzOD95eNT2MyoM-aRzeyaHAJOu0LfQxf57bXyUFCSJzRD7BAIxOkBMkRlnOg6Eiy9V6lE868CG709MubJ_LCmNOvvRj5QITZ8mk-FbU9EqrQDKl3Ga-QYJOjgU5h2TZFv1W0_vcdj1tooZHVK_IaNfAcZELYf9rC-jbQuHRPXQbpQ/p.png"
					/>
				</div>
				<div className="logo-text">
					<p>Codewater Lake</p>
				</div>
			</div>
			</MDBRow>
	  </MDBContainer>
	);
}
