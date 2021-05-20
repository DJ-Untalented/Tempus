import "./styles.css";
//import Menu from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./ModalForm";
//import button from "./Get";
import { Component } from "react";
import { Button, Modal } from "react-bootstrap";
//import Surprise from "./Surprise"; // this is your extra work. hey make a compodent here

//state is a javascript object, functions manipulate state
//set modal as seprate compodent**future work
//in classs there is no need for "const function" instead use switchStateHandler or other functions
//Do not write functions in JSX "render" area
//use console.log to test if things work!
// "!" before function means inverter
// Week work** Make a new compdent, Pass props between compodents, Make a button, Make console log happen on click, Store a word inside state

class App extends Component {
  state = {
    show: false
  };

  switchStateHandler = () => {
    //console.log("I was clicked!");
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Tempus</h1>
        <h2>Sign up and lets save time!</h2>
        <Button onClick={this.switchStateHandler}>Get Started!</Button>

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
      </div>
    );
  }
}

export default App;
