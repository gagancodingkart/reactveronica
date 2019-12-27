import React, { Component } from "react";
import { WooCommerce } from "./WooConnection.js";
import Navbar from 'react-bootstrap/Navbar';
import { ButtonInput } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header.js";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

   getData() {
    const that = this;
    WooCommerce.getAsync("products?per_page=100").then(function(result) {
      console.log(result);
      that.setState({
        isLoaded: true,
        items: JSON.parse(result.toJSON().body)
      });
    });
  }

componentDidMount() {
    this.getData();
  }

 render() {
     return (
      <div>

      <div className="main_div_style bg-light-purple dib pa4 tc">
             <Header />
        {this.state.items.map((val, index) => (
        <div className="col-sm-4" key={index+1}>            
          <img src={val.images[0].src} alt="" />
          <h2>${val.price}</h2>
          <p>{val.name}</p>
        </div>
       ))}
      </div>
      </div>
      )
  }    

}
export default Home;