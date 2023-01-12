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
    {/* <div className="product-container mt-5">
      <div className="box">text1</div>
      <div className="box">text22</div>
      <div className="box">text3</div>
    </div>
    <div className="product-container mt-3">
      <div className="box1 text-black">LOREM IPSUM</div>
      <div className="box1 text-black">LOREM IPSUM</div>
      <div className="box1 text-black">LOREM IPSUM</div>
    </div> */}
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlcnZpY2UlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/1323476855/photo/shot-of-a-young-businesswoman-working-in-call-center.jpg?b=1&s=170667a&w=0&k=20&c=-_f1NVU97K7TI3FvhCq4pVj9eicOqEPvc0GoxLkexpc=" class="card-img-top" alt="..."/>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div> */}
    </div>
  </div>
  {/* <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
</div>
    <Button className="button my-4 px-4">VIEW ALL</Button>

  </div>
  )
}

export default Services