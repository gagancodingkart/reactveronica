import React, {Component, Fragment} from 'react';
import { WooCommerce } from "./WooConnection.js";
import { Col, Row } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ProductCategories from './ProductCategories';
class SideMenu extends Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            loading: false,
            categories: []
        };
    }
    getCatData(){
        const that = this;
       WooCommerce.getAsync('products/categories')
        .then(function(result) {
        that.setState({
             loading: true,
             categories: JSON.parse(result.toJSON().body),
           })               
         })
     }
     componentDidMount(){
       this.getCatData();
     }
     renderCategories = () => {
          return (
              <div className="sied_menu_link">
            {
              this.state.categories.map((category) => {
                  return (         
                         <Link to={`/category/${category.id}`} key={category.id}>
                          {category.name}
                         </Link>        
                  );
              })
           }
           </div>      
               
          );
      }

    render() {

        return (
            <div>
 
               {this.renderCategories()}
            </div>          
        );
    }
}

export default SideMenu;
