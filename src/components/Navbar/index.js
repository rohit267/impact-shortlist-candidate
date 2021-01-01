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
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import "./index.css";
const ImpactNavbar = (props) => {
  const [isOpen, navOpen] = useState(false);

  const toggle = () => {
    navOpen(!isOpen);
  };

  const handleSearch=(e)=>{
    props.search(e.target.value);
  }

  return (
    <Navbar color="light" light expand="md" className="mNav">
      <NavbarBrand href="/">Impact</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/shortlisted">Shortlisted</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/rejected">Rejected</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search</InputGroupText>
            </InputGroupAddon>
            <Input disabled={props.allowed} onChange={handleSearch} placeholder="name" />
          </InputGroup>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default ImpactNavbar;
