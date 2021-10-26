import React , {useState} from 'react';
import {Form,Button,FormGroup,Label,Input} from 'reactstrap';
import Rating from './Rating';
 


const Filters = () => { 

    const [rate , setRate] = useState(4);
    return (
        <div className = "filters">
       
         <span className = "title"> FilterProducts </span>
       
     <Form>
     <span>
        <FormGroup className= " filterform" check>
            <Label check>
                  <Input type="radio" name="radio1" />Price Low to High 
            </Label>
        </FormGroup>
         </span>
    <span>
         <FormGroup className= " filterform" check>
            <Label check>
                  <Input type="radio" name="radio1" />Price-High to Low
            </Label>
        </FormGroup>
 </span>
  <span>
         <FormGroup className= " filterform" check>
            <Label check>
                  <Input type="radio" name="radio1" />Include Out Of Stock
            </Label>
        </FormGroup>
   </span>
    <span>
        <FormGroup className= " filterform" check>
            <Label check>
                  <Input type="radio" name="radio1" />One Day Delivery
            </Label>
        </FormGroup>
    </span>

    <span>
        <label style ={{paddingRight:10}}>Rating  :</label>
        <Rating rating={rate} 
        onClick= {(i) => setRate(i+1)}
        style ={{cursor:"pointer"}}/> 

    </span> 
        <Button variant = "light"> Clear Filters</Button>

     </Form>
     </div>
       
    )
}

export default Filters;
