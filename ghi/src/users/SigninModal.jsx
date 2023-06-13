import React, { useState } from "react";
import { useLoginMutation } from "../redux/apiSlice";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

function SigninModal() {
  const [login] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ username, password });
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
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Sign In</h5>
            <div className="card-body">
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
            </div>
        </div>
    </>
  );

}

export default SigninModal;
