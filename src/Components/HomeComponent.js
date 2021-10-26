import React from 'react';
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const HomeComponent = () => {
    
    const {state :{ products}} =  CartState();
    console.log(products);
    return (
        <div className= "home"> 
         <Filters/>
            <div class = "productContainer">
              {products.map((prod) => {return <SingleProduct prod = {prod} key= { prod.id}/>;
              })}
          
          </div>

         
          </div>
    );
}

export default HomeComponent;
