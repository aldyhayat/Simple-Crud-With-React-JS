import React from "react";
import { Navbar } from "react-bootstrap";
export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-4 mb-5">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home">belajarCrudReactJs</Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
