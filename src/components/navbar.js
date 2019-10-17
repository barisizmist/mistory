import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  Link
} from 'react-router-dom'

const Navigator = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav-custom" color="light" light expand="md">
      <Link className="navbar-brand" to="/">Mistory</Link>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/todo">Todo</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/timer">Timer</Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Others
              </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link className="nav-link" to="/hello">Hi!</Link>
              </DropdownItem>
              <DropdownItem>

                <Link className="nav-link" to="/about">About Us</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link className="nav-link" to="/api">Git User Api</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar >
  );
}

export default Navigator;