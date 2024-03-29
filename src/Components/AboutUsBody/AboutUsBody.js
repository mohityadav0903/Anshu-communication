import React from "react";
import "./AboutUsBody.css";

function AboutUsBody() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <div className="col-md-2 ">
          <h3>LOREM</h3>
          <h5>OCCUPATION LOCATION</h5>
        </div>
        <div className="col-md-4 ">
        <img src="https://th.bing.com/th/id/OIP.RyHhiWsHT-dLwnK-2RMnyQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded float-start" alt="..."/>
        </div>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex eacommodo consequat”.
          </p>
          <div className="circle-bottom">
            <div className="item">
                <div className="circle c1">
                  <img></img>
                </div>
                <div className="circle c2"></div>
                <div className="circle c3"></div>
                <div className="circle c4"></div>
            </div>
            <div className="item">Next &gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
