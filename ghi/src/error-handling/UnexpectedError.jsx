import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const UnexpectedError = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <div className="unexpected-error"></div>
      <div className="hero-content py-40 px-16 p-sm-56 w-100">
        <div>ERROR CODE: 404</div>
        <h1 className="type-display-large break-long mb-24">
          Sorry, looks like that page took a vacation—you should, too
        </h1>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link to="/cabins" className="btn btn-primary">
          View Cabins
        </Link>
      </div>
    </div>
  );
};

export default UnexpectedError;
