import { React } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./styles.css";

const myinfo = (props) => {
  return (
    <Form class="form">
      <Form.Label>First and Last Name</Form.Label>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Provence</Form.Label>
        <Form.Control as="select">
          <option>Alberta</option>
          <option>British Columbia</option>
          <option>Manitoba</option>
          <option>New Brunswick</option>
          <option>New Foundland and Labrador</option>
          <option>Nova Scotia</option>
          <option>Ontario</option>
          <option>Prince Edward Island</option>
          <option>Quebec</option>
          <option>Saskatchewan</option>
          <option>Northwest Territories</option>
          <option>Nunavut</option>
          <option>Yukon</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Intrested In</Form.Label>
        <Form.Control as="select" multiple>
          <option>Clothes</option>
          <option>Food</option>
          <option>Tools</option>
          <option>Music</option>
          <option>Beer</option>
        </Form.Control>
      </Form.Group>
      <Form.Label> </Form.Label>
    </Form>
  );
};

export default myinfo;
