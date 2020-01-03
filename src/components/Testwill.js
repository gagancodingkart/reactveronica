import React, { Component } from "react";
import { Col, Row, Container, Button, Spinner, Pagination } from 'react-bootstrap';
import { WooCommerce } from "./WooConnection.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import Header from "./Header.js";
import SideMenu from "./Categorielist";
class Testwill extends Component {


  getInitialProps() {
    return {
      myProp: "blank"
    };
  }
  getInitialState() {
    return {
      modified: "still blank"
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      modified: nextProps.myProp + "IsSoModified"
    });
  }
  render() {
    return <div class="displayed">{this.state.modified}</div>
  }
  
}
export default Testwill;
