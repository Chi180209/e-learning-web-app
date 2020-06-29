import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button
} from 'react-bootstrap';

import '../App.css';

export default class Navigation extends React.Component{

  render(){
    return(
      <Navbar
      style={{backgroundColor: this.state.status === "top" ? "unset" : "white",position: "fixed", width:"100%"}}>
      <Navbar.Brand href="#home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcdIKQhOmX7bxnX9cghwurqPluT9vqwh1_hg&usqp=CAU" width={100} height={70} alt=""/>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="ml-5">
          <Button variant="outline-success" >Search</Button>
          <FormControl type="text" placeholder="____________________________________________________" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto " id="navlink">
          <Nav.Link href="#username">Username</Nav.Link>
          <NavDropdown title="List" id="basic-nav-dropdown">
            <NavDropdown.Item href="#like">気に入り</NavDropdown.Item>
            <NavDropdown.Item href="#created">作成済</NavDropdown.Item>
            <NavDropdown.Item href="#recent">最近</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
        if (scrolled >= 120) {
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