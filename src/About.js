import { React } from "react";
import "bootstrap";
import { Card } from "react-bootstrap";
import Logo from "./Assets/Images/Tempus Logo.svg";
import Link from "react-router-dom";
import "./styles.css";

const about = (props) => {
  return (
    <div class="center">
      <Card bg="info" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body class="AboutText">
          <Card.Title>About Tempus</Card.Title>
          <Card.Text>
            The Tempus App is based on simplicity and control. Everyday our data
            is collected in the digital world, and in the real world. A simple
            trip to the mall or grocery store can turn into a data breach.
            Companies collect your email, name, credit card information ect.
            Tempus is here to help you regain control. Our mission is to keep
            your data secure, and your time spent at cash minimal. With a simple
            tap you can pay, and give companies only info you want to give out.
            Gain control of your data with Tempus.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default about;
//function based must be caps
//class is lower **line 5
