import { NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./redux/apiSlice";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";

function Nav() {
  const { data: account } = useGetAccountQuery();
  const [logout, result] = useLogoutMutation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  return (
    <MDBNavbar expand="lg" light sticky bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            src="https://previews.dropbox.com/p/thumb/AB5xuQ08JucnkpSHnRYNVp45P0gmwiR4fctUn-m4FD1Bc79A6O3tuy2X5hT2yRDBI2fgIARM-N8fPzrvsKo5B-vbQuorYcobJ8zyEw1AQ7K1rYxkULXNprGlYvvkQmDn1yd1tcgGjBIgTGquIfsfJEG8Wl_Ui7xQFisbn2fb0uYNFctMot7w1NxcvuHzvCCpdqShRJWMXwrukezIE5f-VXUzOD95eNT2MyoM-aRzeyaHAJOu0LfQxf57bXyUFCSJzRD7BAIxOkBMkRlnOg6Eiy9V6lE868CG709MubJ_LCmNOvvRj5QITZ8mk-FbU9EqrQDKl3Ga-QYJOjgU5h2TZFv1W0_vcdj1tooZHVK_IaNfAcZELYf9rC-jbQuHRPXQbpQ/p.png"
            height="50"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {!account && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/signup">Sign up</MDBNavbarLink>
              </MDBNavbarItem>
            )}

            {account && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/profile">Profile</MDBNavbarLink>
              </MDBNavbarItem>
            )}

            <MDBNavbarItem>
              <MDBNavbarLink href="/cabins">Our Cabins</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>

      <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
        {account && (
          <MDBNavbarItem>
            <MDBNavbarLink>
              <button
                href="/"
                type="button"
                className="btn btn-sm btn-outline-danger"
                id="logout"
                onClick={() => {
                  navigate("/");
                  return logout();
                }}
              >
              Logout
              </button>
            </MDBNavbarLink>
          </MDBNavbarItem>
        )}

        {!account && (
          <MDBNavbarItem>
            <MDBNavbarLink>
              <button
                href="/signin"
                type="button"
                className="btn btn-sm btn-outline-success"
                id="login"
                onClick={() => {
                  navigate("/signin");
                }}
              >
              Login
              </button>
            </MDBNavbarLink>
          </MDBNavbarItem>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Nav;
