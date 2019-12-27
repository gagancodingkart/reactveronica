import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { ButtonInput } from 'react-bootstrap';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
 
  render() {
    return (<header id="header">
    <div className="header_top">
     <Navbar bg="light" >
    <Navbar.Brand href="/" className="pa4 tc" >HOME</Navbar.Brand>
    <Navbar.Brand href="#" className="pa4 tc">ABOUT</Navbar.Brand>
    <Navbar.Brand href="./ProductCategories" className="pa4 tc">ProductCategories</Navbar.Brand>
  </Navbar>
    </div>
    </header>
    )
  }
}
export default Header;