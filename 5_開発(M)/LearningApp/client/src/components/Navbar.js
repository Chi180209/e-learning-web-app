import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';

const Navigation = ({props}) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#home">Logo+ten</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="News" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Nursing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hotel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Supermarket</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.5">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Login</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Navigation;