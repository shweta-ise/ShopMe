import React from 'react';
import {Card,CardImg,CardBody,CardTitle, Button,CardText} from 'reactstrap';
import Rating from './Rating';

const SingleProduct = ({prod}) => {
    return (
        <div className= "products">
        <Card  className= "prod-card">
        <CardImg className = "card-img" src = {prod.image}/>
        <CardBody>
        <CardTitle>
        {prod.name}
        </CardTitle>

          {prod.fastDelivery ? (<div>One Day Delivery</div>) : (<div>3 days Delivery </div>)}
         <Rating rate = {prod.ratings}/>
          <CardText>
            <Button type="submit" className = "btn-success" > Add To Cart</Button>
            </CardText>
            <CardText>
            <Button type="submit" className = "btn-danger" > Remove item</Button>
            </CardText>
        </CardBody>
         </Card>   
        </div>
    )
}

export default SingleProduct;
