import React, { useState } from "react";
import { useSignupMutation } from "../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdb-react-ui-kit";

function Signup() {
  const [register] = useSignupMutation();
  const navigate = useNavigate();
  const [first_name, setFirstname] = useState(null);
  const [last_name, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmpassword, setConfirmpassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("Passwords entered do not match.");
    } else {
      const response = register({ first_name, last_name, email, password });
      if (response.error) {
        alert("Incomplete form!", response.error.status);
      } else {
        navigate("/");
        };
      }
    };

  return (
    <>
      <MDBContainer className="signup">
        <MDBRow>
          <MDBCol></MDBCol>
          <MDBCol>
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
                    <MDBInput
                      name="first name"
                      type="text"
                      className="form-input"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Your Last Name</label>
                    <MDBInput
                      name="last name"
                      type="text"
                      className="form-input"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Email</label>
                    <MDBInput
                      name="email"
                      type="text"
                      className="form-input"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Password</label>
                    <MDBInput
                      name="password"
                      type="password"
                      className="form-input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <MDBInput
                      name="confirmed password"
                      type="password"
                      className="form-input"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </div>
                  <MDBBtn outline rounded type="submit" color="info" block>
                    Sign up
                  </MDBBtn>
                </form>
              </div>
            </div>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Signup;
