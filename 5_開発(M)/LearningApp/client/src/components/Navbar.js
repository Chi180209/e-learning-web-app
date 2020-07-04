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
      <Form outline className="searchbox">
          <FormControl type="text" placeholder="Type to search..." className="search-txt" />
          <Button href="#search" className="search-btn"><i className="fas fa-search"></i></Button>
      </Form>

      <div outline className="searchbox">
              <input type="text" placeholder="Type to search..." className="search-txt" />
              <Button href="#search" className="search-btn"><i className="fas fa-search"></i></Button>
      </div>
      
        <Nav className="ml-auto" id="navlinks">
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

  .searchbox{
    border-radius: 50px 0 0 50px ;
    padding: 1px;
    background: #fff;
  }
  .search-txt{
  border: none;
  background: none;
  outline: none;
  float: right;
  padding: 0;
  color: #000;
  font-size: 15px;
  line-height: 35px;
  width: 260px;
  padding: 0 20px
  }

  .search-btn{
  float: left;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;