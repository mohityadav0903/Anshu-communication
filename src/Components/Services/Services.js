import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function Services() {
  return (
    <div className="container">
    <h1 className="h1">
      <span>
        Services <span className="dot"></span>
      </span>
    </h1>
    <div className="product-container mt-5">
      <div className="box">text1</div>
      <div className="box">text22</div>
      <div className="box">text3</div>
    </div>
    <div className="product-container mt-3">
      <div className="box1 text-black">LOREM IPSUM</div>
      <div className="box1 text-black">LOREM IPSUM</div>
      <div className="box1 text-black">LOREM IPSUM</div>
    </div>
    <Button className="button my-4 px-4">VIEW ALL</Button>

  </div>
  )
}

export default Services