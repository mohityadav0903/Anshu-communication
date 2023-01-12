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
        <div className="col-md-5 card">
<img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded float left img-thumbnail"></img>

        </div>
      </div>
    </div>
  );
}

export default Body;
