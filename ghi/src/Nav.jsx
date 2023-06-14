import { useNavigate } from "react-router-dom";
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
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const getLinkPath = (path) => {
    const basePath = process.env.PUBLIC_URL || '';
    const trimmedPath = path.trim();
    return `${basePath}${trimmedPath}`;
  };

  return (
    <MDBNavbar expand="lg" light sticky bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href={getLinkPath("/")}>
          <img
            src="https://dl.dropboxusercontent.com/s/j268a6rjz1almh3/logo-black.png"
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
                <MDBNavbarLink href={getLinkPath("/signup")}>Sign up</MDBNavbarLink>
              </MDBNavbarItem>
            )}

            {account && (
              <MDBNavbarItem>
                <MDBNavbarLink href={getLinkPath("/profile")}>Profile</MDBNavbarLink>
              </MDBNavbarItem>
            )}
            <MDBNavbarItem>
              <MDBNavbarLink href={getLinkPath("/reservations")}>Reservations</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={getLinkPath("/cabins")}>Our Cabins</MDBNavbarLink>
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
