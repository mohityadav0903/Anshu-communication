import React from "react";
import Button from "react-bootstrap/Button";

import "./Body.css";
function Body() {
  return (
    <div className="body-container container my-5 py-5">
      <div className="row ">
        <div className="col-md-7">
          <h1>Lorem ipsum dolor sit amet ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button className="button px-4 mx-3">Contact Us</Button>

        </div>
        <div className="col-md-5">image</div>
      </div>
    </div>
  );
}

export default Body;
