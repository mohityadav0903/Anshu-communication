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
        {/* <div>
          <div className="box" >
            <img src={"photo1.jpg"}/>
          </div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div>
        <div>
          <div className="box" >text2</div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div>
        <div>
          <div className="box" >text3</div>
          <div className="my-3 text-black" >LOREM IPSUM</div>
        </div> */}
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/182192586/photo/portable-electric-generator.jpg?b=1&s=170667a&w=0&k=20&c=IToouS6XwkG9gvp0MlqnkUnAzRIzgZ53YuYZl54dAvE=" class="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/1354248256/photo/power-generator-steam-turbine-power-plant-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=hn-dazZqHeC1K2brrlSmmR_jyI9LoILm6Sw1tfl05F4=" class="card-img-top" alt="..."/>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/1377401660/photo/portable-gasoline-generator.jpg?b=1&s=170667a&w=0&k=20&c=tN29BekI-CDbLgK5ZHOp5YKJJWtSA7HVlmAHjZ-YUZ0=" class="card-img-top" alt="..."/>
      {/* <div class="card-body"> */}
        {/* <h5 class="card-title">Card title</h5> */}
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      {/* </div> */}
    </div>
  </div>
</div>
      </div>
     
      <Button className="button my-4 px-4">VIEW ALL</Button>
    </div>
  );
}

export default Products;
