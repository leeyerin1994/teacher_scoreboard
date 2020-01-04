import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from "react-router-dom";

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavLink to="/" className="navbar-brand">React</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/heroes" className="nav-link">Heroes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/scoreboard" className="nav-link">Scoreboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/product" className="nav-link">Product</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}