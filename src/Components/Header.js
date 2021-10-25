import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

import {
  Jumbotron,
  Container,
  Collapse,
  toggle,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Badge
} from 'reactstrap';
 
class Header extends Component {
   
    constructor(props)
    {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleDropdown = this.handleDropdown.bind(this);

      this.state ={
          isNavOpen: false,
          isModalOpen : false,
          isDropdownOpen : false
      };
    }

     
     
  handleLogin(event)
  {
    alert(`Username: ${this.username.value} Password : ${this.password.value} Remember Me : ${this.remember.checked}`);
    this.toggleModal();
    event.preventDefault();
  }



  toggleModal()
  {
      this.setState({
          isModalOpen : !this.state.isModalOpen
      });
  }

  handleDropdown()
  {
     this.setState({
     isDropdownOpen : !this.state. isDropdownOpen 
     });
  }

  

  
render() {

 return (


    <React.Fragment>
            
        <Navbar className ="navigationbar" sticky="top" >
            <NavbarBrand className = "navbrand"><Link to ="/"> Shopme.com</Link> </NavbarBrand>
            <FormGroup className = "row">
              <Input  className= "searchbar"  name="searchBox" id="searchBox" placeholder="Search Products" />
            </FormGroup>
        
           <Dropdown isOpen= {this.state.isDropdownOpen} toggle={this.handleDropdown}>
              <DropdownToggle>   <i className = "fa fa-shopping-cart fa-2x"/>
              </DropdownToggle>
                <DropdownMenu right > <span style = {{padding : 10}}> Cart is Empty!</span>
                </DropdownMenu>
                  <Badge>10</Badge>
          </Dropdown>
        
       <Button outline onClick ={this.toggleModal} > Login
        </Button>

        
       
        
      
        
      </Navbar>
              <Modal isOpen = {this.state.isModalOpen} toggle= {this.toggleModal}>
                <ModalHeader toggle= {this.toggleModal}>Login
                </ModalHeader>
                <ModalBody>
                  
                <Form onSubmit={this.handleLogin}>
                <FormGroup>
                   <Label htmlfor ="username">Username</Label>
                   <Input type ="text" id="username" name ="username"
                     innerRef={input => this.username = input} />
                </FormGroup>

                 <FormGroup>

                <Label htmlfor ="password">Password</Label>
                      <Input type ="text" id="Password" name ="password"
                        innerRef={input => this.password = input} />
                </FormGroup>

                 <FormGroup check>
                 <Label check>
                 <Input type = "checkbox" name= "remember"
                  innerRef={input => this.remember = input} />
                 Remember me
                 </Label>
                </FormGroup>

                <Button type = "submit" value = "submit" color = "primary">Login</Button>
                </Form>
                </ModalBody>
                </Modal>

               
        
  </React.Fragment>
  );
} 
}

export default Header;
