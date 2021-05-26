import { React } from "react";
import { Navbar, Nav, Route } from "react-bootstrap";
import Logo from "./Assets/Images/Tempus Logo.svg";
import About from "./About";
import { HashRouter } from "react-router-dom";
import "./styles.css";

//children do not work with class based compodents

const menu = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
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
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#Purchases">Recent Purchases</Nav.Link>
          <Nav.Link href="#Stores">Recent Stores</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#MyInfo">My Info</Nav.Link>
          <Nav.Link href="#About">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default menu;
