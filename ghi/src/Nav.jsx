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
    <MDBNavbar expand="lg" light bgColor="light">
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

            {!account && (
              <MDBNavbarItem>
                <MDBNavbarLink href="/signin">Sign in</MDBNavbarLink>
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

            <MDBNavbarItem></MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
        {account && (
          <MDBNavbarItem>
            <MDBNavbarLink>
              <button
                href="/"
                onClick={() => {
                  navigate("/");
                  return logout();
                }}
                type="button"
                class="btn btn-outline-danger"
              >
                Logout
              </button>
            </MDBNavbarLink>
          </MDBNavbarItem>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-light padding 5em">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink className="navbar-brand" to="/homepage">
    //             Homepage
    //           </NavLink>
    //         </li>
    //         {!account && (
    //           <li className="nav-item">
    //             <NavLink className="navbar-brand" to="/signup">
    //               Signup
    //             </NavLink>
    //           </li>
    //         )}
    //         {!account && (
    //           <li className="nav-item">
    //             <NavLink className="navbar-brand" to="/signin">
    //               Signin
    //             </NavLink>
    //           </li>
    //         )}
    //         {account && (
    //           <li className="nav-item">
    //             <NavLink className="navbar-brand" to="/profile">
    //               Profile
    //             </NavLink>
    //           </li>
    //         )}
    //         <li className="nav-item">
    //           <NavLink className="navbar-brand" to="/aboutus">
    //             About Us
    //           </NavLink>
    //         </li>
    //         {account && (
    //           <li className="nav-item">
    //             <NavLink className="navbar-brand" to="/reservations">
    //               Reservations
    //             </NavLink>
    //           </li>
    //         )}
    //         <li className="nav-item">
    //           <NavLink className="navbar-brand" to="/cabins">
    //             Cabins
    //           </NavLink>
    //         </li>
    //         {account && (
    //           <button
    //             className="btn btn-outline-danger"
    //             onClick={() => {
    //               navigate("/");
    //               return logout();
    //             }}
    //           >
    //             Logout
    //           </button>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Nav;
