import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" dark expand="md">
      <div className="container-fluid">
        <NavbarBrand className="fw-bold">Video keep</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="video-add" className="fs-5">
                <NavLink>Add video</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/video-gallery" className="fs-5">
                <NavLink>Videos</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarContainer;
