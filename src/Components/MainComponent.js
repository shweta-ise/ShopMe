import React from "react";
import Header from './Header';
import HomeComponent from './HomeComponent';
import Cart from './Cart';
import { BrowserRouter,Route,Link } from 'react-router-dom';

function Main()
{
    return(
        <React.Fragment>
          <Header/>

          <Route path ='/' exact>  <HomeComponent/> </Route>
          <Route path ='/cart' exact>  <Cart/> </Route>
       

        </React.Fragment>
    );
}

export default Main;