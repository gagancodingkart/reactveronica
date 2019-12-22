import React,{Component} from 'react';
 import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CommonComponent.css';
import Home from "./components/Home.js";
import 'tachyons';
class Commoncomponent extends Component {
// class App extends Component {
  render() {
    return (
      <div className="Home">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Commoncomponent;