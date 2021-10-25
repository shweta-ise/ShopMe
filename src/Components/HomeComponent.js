import React from 'react';
import { CartState } from "../context/Context";

const HomeComponent = () => {
    
    const {state :{ products}} =  CartState();
    console.log(products);
    return (
        <div>
            Home
     {/* <Filters/> */}
        </div>
    )
}

export default HomeComponent;
