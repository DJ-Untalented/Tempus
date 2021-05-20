import { React, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//the as*^ changes the name
import Home from "./Home";
import Menu from "./Menu";
import "bootstrap";
import About from "./About";

class App extends Component {
  render() {
    //this is the JSX part
    return (
      <div className="App">
        <BrowserRouter>
          <Menu>Tempus</Menu>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
