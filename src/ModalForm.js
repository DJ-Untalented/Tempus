import React from "react";
import { Form, Button } from "react-bootstrap";

const form = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>{props.email}</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="alt-text">{props.privacy}</Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>{props.password}</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
        {props.check}
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.submit}
      </Button>
    </Form>
  );
};

export default form;
