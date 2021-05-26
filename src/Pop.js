import { React, Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "./ModalForm";
import "./styles.css";

//constants are lowcase!
//arguments such as this.state.show need to be in tags as they are not childern

class Pop extends Component {
  state = {
    show: false
  };
  switchStateHandler = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Let's Get Started
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>First things first</h4>
          <Form
            email="Please enter email"
            privacy="We won't share your data!"
            password="Pick a good password!"
            submit="Let's do this!"
            check="hi, I'm useless"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.switchStateHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default Pop;
//hey don't forget this!
