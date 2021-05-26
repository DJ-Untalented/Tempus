import { React } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import gotem from "./Assets/Images/gotem.gif";
import "./styles.css";
const purchases = (props) => {
  return (
    <Jumbotron>
      <h1>Recent Purchases</h1>
      <p>
        This page is in the works, don't give up on us. We won't give up on you!
        <div class="roll">
          <img
            src={gotem}
            width="75"
            height="50"
            className="d-inline-block align-top"
            alt="Tempus Logo"
          />
        </div>
      </p>
      <p></p>
    </Jumbotron>
  );
};

export default purchases;
