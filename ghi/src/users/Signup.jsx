import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useSignupMutation } from "../redux/apiSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [register] = useSignupMutation();
  const navigate = useNavigate();
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("Passwords entered do not match.");
    } else {
      register({ first_name, last_name, email, password });
      navigate("/");
      console.log("Form submitted:", {
        first_name,
        last_name,
        email,
        password,
      });
    }
  };

  return (
    <>
      <div className="card text-bg-light mb-3">
        <h5 className="card-header">Signup</h5>
        <div className="card-body">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Enter Your First Name</label>
              <input
                name="first name"
                type="text"
                className="form-control"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Your Last Name</label>
              <input
                name="last name"
                type="text"
                className="form-control"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                name="confirmed password"
                type="password"
                className="form-control"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
            </div>
            <div>
              <MDBBtn className="btn btn-primary" type="submit" >Sign Up</MDBBtn>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
