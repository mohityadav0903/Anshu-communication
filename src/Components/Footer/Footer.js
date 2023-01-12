import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "react-bootstrap/esm/Button";

function Footer() {
  return (
    <div className="container-fluid ">
      {/* <div className="row">
        <div className="col-sm-1 footer-div1">
          <div className="footer-items-div">LOGO</div>
          <div className="footer-items-div dot-div">
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
          </div>
          <div className="footer-items-div dot-div">
            <div className="icon-footer">
              <InstagramIcon />
            </div>
            <div className="icon-footer">
              <InstagramIcon />
            </div>
            <div className="icon-footer">
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="col-sm-11 footer-div2 container-fluid my-10">
          <div className="footer-head container my-10">
            <h1 className="my-5 py-5">ANSHU COMMUNICATION</h1>
          </div>
          <div className="base-footer py-5">
            <div className="base-content">
              <Button className="button px-4">Contact Us</Button>
            </div>
            <div className="base-content">
                <h4>Dear Sir/Mam</h4>
                <h6>Anshucommunication@gmail.com</h6>
            </div>
            <div className="base-content">
                <h4>Location/phone no.</h4>
            </div>
          </div>
        </div>
      </div> */}
    
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
<div className="col-12 row my-3">
        <div className="col-sm-1 footer-div1">
          <div className="footer-items-div">LOGO</div>
          <div className="footer-items-div dot-div">
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
            <div className="dot-footer"></div>
          </div>
          <div className="footer-items-div dot-div">
            <div className="icon-footer">
              <InstagramIcon />
            </div>
            <div className="icon-footer">
              <InstagramIcon />
            </div>
            <div className="icon-footer">
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="col-sm-11 footer-div2 my-3">
          <div className="footer-head">
            <h1 className="my-5 py-5">ANSHU COMMUNICATION</h1>
          </div>
          <div className="base-footer py-5">
            <div className="base-content">
              <Button className="button px-4">Contact Us</Button>
            </div>
            <div className="base-content">
                <h4>Dear Sir/Mam</h4>
                <h6>Anshucommunication@gmail.com</h6>
            </div>
            <div className="base-content">
                <h4>Location/phone no.</h4>
            </div>
          </div>
        </div>
    
  </div>
</div>

  
  );
}

export default Footer;
