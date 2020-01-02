import React, { Component } from 'react';
import { Col, Row, Container, Button, Spinner, Pagination } from 'react-bootstrap';
import { WooCommerce } from "./WooConnection.js";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
 class Product extends Component {
       constructor(props) {
          super(props);
           this.pageChanged = this.pageChanged.bind(this);
          this.state = {
             error: null,
             isLoaded: false,
             currentPage: 1,
             per_page_product: 10,
             total_items:null,
             category: [],
             items: []
            
          }
            
        }
     getData(page){
     const that = this;
      if (page) {
        var page = page;
     }else{
      var page = 1;
     }
    WooCommerce.getAsync('products?per_page='+that.state.per_page_product+'&page='+page)
     .then(function(result) {
      console.log(JSON.parse(result.toJSON().body));
      that.setState({
          isLoaded: true,
          total_items: result.headers['x-wp-total'],
          items: JSON.parse(result.toJSON().body),
        })
            
      })
  }
 
  
  componentDidMount(){
    this.getData();
  }
   pageChanged(e) {
    this.setState({ currentPage: e.target.text });
    this.getData(e.target.text);
  }
  productlist(){
    return (
        this.state.items.map((item) => {
          return (
                <div className="main_div_style bg-light-purple dib pa4 tc">
              <Col key={item.id} xs={3} className="product_item"> <div key={item.id}>
                <img width="100%" alt="product" src={item.images[0].src} />
                <Link to={`/product/${item.id}`}><h4>{item.name}</h4></Link>
                <h6> ${item.price}</h6>
                 <Button variant="outline-primary" className="add_to_cart_btn" href={`/product/${item.id}`}>Buy Now</Button>
                 {/* <Link to={`/product/${item.id}`}  className="add_to_cart_btn">Buy Now</Link> */}
                  </div>
              </Col>
              </div>
             );
            })    
    );
  }
  
//render  list
  render () {
      console.log(this.state.currentPage);      
      const all_page = this.state.total_items / this.state.per_page_product;
      let active = this.state.currentPage;
      let Pitems = [];   
 
      for (let number = 1; number <= all_page; number++) {
        Pitems.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>
          
          ,
        );
      }

const paginationBasic = (
  <div>
    <Pagination onClick={this.pageChanged}>{Pitems}</Pagination>
   
  </div>
);
                  return(
        <Container>
       
          <Row>

<Col xs={9}>
   
         <Row>
        {this.productlist()}
        </Row>
</Col>
</Row>        
        
           <div className="page_cont">
           {paginationBasic}
          </div>  
            
          </Container>
    )
               
        }
    }

export default Product;