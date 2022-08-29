import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./Partnerr.css";

function Partnerr() {
  return (
    <div className="container py-5">
      <div className="head1">
        <h1 className="text-black ">Want To Buy Products?</h1>
        <Button className="button px-4 but">Contact Us</Button>
      </div>
      <div className="head2">
        <h1 className="text-black  ">Want To Be Our Partner?</h1>
        <Button className="button px-4  but">Be Partner</Button>
      </div>
    </div>
  );
}

export default Partnerr;
