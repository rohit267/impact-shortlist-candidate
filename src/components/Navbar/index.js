import React from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";



const ImpactNavbar = () => {
  const [isOpen, navOpen] = useState(false);

  const toggle = () => {
    navOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Impact</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/pages/shortlisted">Shortlisted</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pages/shortlisted">Rejected</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ImpactNavbar;
