import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();  
    



const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({ 
        id : faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price: faker.commerce.price(),
        image:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,7,9]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.random.arrayElement([1,2,3,4,5]),
    }));
    
    const [state, dispatch] = useReducer(cartReducer,
    {
        products : products,
        cart: []
    });
    
    return (
        <Cart.Provider value={{state,dispatch}}>
        {children}
        </Cart.Provider>
            
       
    );
}


export const CartState = () => {
    return useContext(Cart)
}

export default 
Context;