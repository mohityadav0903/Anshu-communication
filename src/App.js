import React from "react";
import "./App.css";
import Aboutus from "./Pages/Aboutus";
import FooterPage from "./Pages/FooterPage";
import Home from "./Pages/Home";
import Partner from "./Pages/Partner";
import ProductsAndServices from "./Pages/ProductsAndServices";
import WhatWeDo from "./Pages/WhatWeDo";

function App() {
  return (
    <div className="App">
      <Home/>

      <WhatWeDo/>

      <ProductsAndServices /> 

      <Aboutus/>

       <Partner/>

      <FooterPage/>
    </div>
  );
}

export default App;
