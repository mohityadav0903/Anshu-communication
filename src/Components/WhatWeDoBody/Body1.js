import React from "react";
import Button from "react-bootstrap/Button";
import "./Body1.css"

function Body1() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* <h2 className="h2-body1">WE SELL ELECTRONIC PRODUCTS</h2> */}
               <h2 className="text-black  h2-body1">WE SELL ELECTRONIC PRODUCTS</h2> 
          </div>
          <div className="col-lg-8 top-right">
            <h2 className="h2-top-right">Lorem ipsum dolor sit amet</h2>
            <p className="para-top-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <Button className="button px-4 mx-3">Our Products</Button>
            {/* <div className="product">
            <img src="https://th.bing.com/th/id/OIP.ZCAxVokcXpsShzchaDWJwgHaE8?w=299&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded float-start img-thumbnail"/>
             <img src="https://th.bing.com/th/id/OIP.UuSm0YGi1OEgud7jw8jfggHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded float-end img-thumbnail"></img>
             </div> */}
          </div>
        </div>
      </div>
      <div className="body-container container my-5 py-5">
      <div className="row ">
        <div className="col-md-7  top-right">
          <h1 className="h2-top-right">Lorem ipsum dolor sit amet ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Button className="button px-4 mx-3">Contact Us</Button>

        </div>
        <div className="col-md-5"><h1 className="text-black  h2-body1">WE PROVIDE SERVICES</h1></div>
      </div>
    </div>
    </>
  );
}

export default Body1;
