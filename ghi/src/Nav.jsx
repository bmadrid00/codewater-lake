import { NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "./redux/apiSlice";



function Nav() {

  const { data: account } = useGetAccountQuery()
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success padding 5em">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/">
                Homepage
              </NavLink>
            </li>
            {!account && <li className="nav-item">
              <NavLink className="navbar-brand" to="/signup">
                Signup
              </NavLink>
            </li>}
            {!account && <li className="nav-item">
              <NavLink className="navbar-brand" to="/signin">
                Signin
              </NavLink>
            </li>}
          {account && <li className="nav-item">
            <NavLink className="navbar-brand" to="/profile">
              Profile
            </NavLink>
          </li>}
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/aboutus">
                About Us
              </NavLink>
            </li>
            {account && <li className="nav-item">
              <NavLink className="navbar-brand" to="/reservations">
                Reservations
              </NavLink>
            </li>}
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/cabins">
                Cabins
              </NavLink>
            </li>
            {account && <button
            className='btn btn-outline-danger'
            onClick={() => {navigate('/'); return logout()}}
            >Logout</button>}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
