import { React, Component } from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
//the as*^ changes the name
import { Render, ReactDOM, render } from "react-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import "bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import MyInfo from "./MyInfo";
import Purchases from "./Purchases";
import Stores from "./Stores";
import "./styles.css";

class App extends Component {
  render() {
    //this is the JSX part
    return (
      <div className="App">
        <HashRouter>
          <Menu>Tempus</Menu>
          <Switch>
            <Route path="/" component={Menu} exact>
              <Home />
            </Route>
            <Route path="/About" component={About} exact>
              <About />
            </Route>
            <Route path="/MyInfo" component={MyInfo} exact>
              <MyInfo />
            </Route>
            <Route path="/Purchases" component={Purchases} exact>
              <Purchases />
            </Route>
            <Route path="/Stores" component={Stores} exact>
              <Stores />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
    /*function About() {
      return ( 
        <div className="About">
      <h1 style={{color:"white"}}>About Tempus</h1>
      <br></br>
      <h3> The Tempus App is based on simplicity and control. Everyday our data
            is collected in the digital world, and in the real world. A simple
            trip to the mall or grocery store can turn into a data breach.
            Companies collect your email, name, credit card information ect.
            Tempus is here to help you regain control. Our mission is to keep
            your data secure, and your time spent at cash minimal. With a simple
            tap you can pay, and give companies only info you want to give out.
            Gain control of your data with Tempus.</h3>
      </div>
      );
    };*/
  }
}

export default App;
