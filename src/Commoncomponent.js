import React,{Component} from 'react';
 import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CommonComponent.css';
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import 'tachyons';
import ProductCategories from "./components/ProductCategories.js";
class Commoncomponent extends Component {
// class App extends Component {
  render() {
    return (
      <div className="Home">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Header" component={Header} />
            <Route exact path="/ProductCategories" component={ProductCategories} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Commoncomponent;