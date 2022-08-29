import React from "react";
import "./Products.css";
import Button from "react-bootstrap/esm/Button";

function Products() {
  return (
    <div className="container">
      <h1 className="h1">
        <span>
          Products <span className="dot"></span>
        </span>
      </h1>
      <div className="product-container mt-5">
        <div>
          <div className="box" >text1</div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div>
        <div>
          <div className="box" >text2</div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div>
        <div>
          <div className="box" >text3</div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div>
      </div>
     
      <Button className="button my-4 px-4">VIEW ALL</Button>
    </div>
  );
}

export default Products;
