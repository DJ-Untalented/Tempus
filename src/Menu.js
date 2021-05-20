import { React } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Assets/Images/Tempus Logo.svg";
//import { FiDollarSign } from "react-icons";
//children do not work with class based compodents

const menu = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <img
        src={Logo}
        width="75"
        height="50"
        className="d-inline-block align-top"
        alt="Tempus Logo"
      />

      <Navbar.Brand href="/">{props.children}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#purchases">Recent Purchases</Nav.Link>
          <Nav.Link href="#stores">Recent Stores</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#myinfo">My Info</Nav.Link>
          <Nav.Link href="/about">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default menu;
