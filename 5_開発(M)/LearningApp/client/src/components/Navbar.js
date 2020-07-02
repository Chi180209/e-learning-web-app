import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
  NavItem
} from 'react-bootstrap';

import '../App.css';
import styled from 'styled-components';


export default class Navigation extends React.Component{

  render(){
    return(
      <Navigationstyled>
      <Navbar style={{backgroundColor: this.state.status === "top" ? "unset" : "white",position: "fixed", width:"100%"}}>
      <Navbar.Brand href="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcdIKQhOmX7bxnX9cghwurqPluT9vqwh1_hg&usqp=CAU" width={100} height={70} alt=""/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="ml-auto" id="searchnav">
          <FormControl type="searchnavbar" placeholder="Type to search..." className="mr-sm-2 rounded-pill" />
          <Button href="#search" variant="outline-primary"><i className="fas fa-search"></i></Button>
        </Form>
        <Nav className="ml-auto " id="navlink">
          <NavItem><Nav.Link href="/">Home</Nav.Link></NavItem>
          <NavItem>
            <NavDropdown title="List" id="basic-nav-dropdown">
            <NavDropdown.Item href="#like">気に入り</NavDropdown.Item>
            <NavDropdown.Item href="#created">作成済</NavDropdown.Item>
            <NavDropdown.Item href="#recent">最近</NavDropdown.Item>
          </NavDropdown>
          </NavItem>
          <NavItem><Nav.Link href="#logout">Logout</Nav.Link></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Navigationstyled>
    );}

    constructor(){
      super();
      this.listener = null;
      this.state = {
        status:"top"
      };
    }
    componentDidMount(){
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 150) {
          if (this.state.status !== "notop") {
            this.setState({ status: "notop" });
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({ status: "top" });
          }
        }
      });
    }
    componentDidUpdate(){
      document.removeEventListener("scroll", this.listener);
    }
}

const Navigationstyled = styled.div`
.nav-item:hover{
    background: var(--red);
  }
`;