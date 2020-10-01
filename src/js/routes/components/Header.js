import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="tk-clone-rounded-latin">
      <Navbar.Brand href="/">Game Analysis</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-collapse-no-border"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/salva">Save Zone</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/libreria">Libreria</Nav.Link>
          <Nav.Link href="/corridoio">Corridoio</Nav.Link>
          <Nav.Link href="/proprietari">Proprietari</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
