import React, { useState } from "react";
import { useLoginMutation } from "../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

function Signin() {
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ username, password });
    console.log(response);
    if (response.error) {
      if ( response.error.status === 422) {
        alert(response.error.data.detail[0].msg);
      } else {
        alert(response.error.data.detail);
      }
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <MDBContainer className="signin mb-10">
        <MDBRow>
          <MDBCol />
          <MDBCol>
            <form onSubmit={(e) => handleSubmit(e)}>
              <MDBInput
                className="form-input mb-4"
                type="email"
                label="Email address"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                className="form-input mb-4"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtn outline rounded type="submit" color="info" block>
                Sign in
              </MDBBtn>
            </form>
          </MDBCol>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Signin;
