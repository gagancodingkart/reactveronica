import React, { Component } from "react";
import { Col, Row, Container, Button, Spinner, Pagination } from 'react-bootstrap';
import { WooCommerce } from "./WooConnection.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header.js";
import SideMenu from './Categorielist';
import '../CommonComponent.css';
class ProductCategories extends Component {
  constructor(props, state) {
    // console.log(props);
    super(props, state);
    this.pageChanged = this.pageChanged.bind(this);
    this.state = {
    error: null,
    isLoaded: false,
    // cat_id : props.match.params.id,
    cat_id : 118,
    currentPage: 1,
    per_page_product: 8,
    total_items:null,
    items: {}
    };
  }
  componentWillReceiveProps(newProps){
    alert(newProps);
    var categoryId = newProps.match.params.id;
    var categoryId = categoryId;
     // console.log(categoryId);
    this.setState({cat_id:categoryId}, () => {
      this.getcatData();
    });  
    }
  
  getcatData(page) {
    const that = this;
    if (page) {
      var page = page;
     
   }else{
    var page = 1;
   }
     var category_id = this.state.cat_id;
    // alert(category_id);
      WooCommerce.getAsync('products/?page='+page+'&per_page='+that.state.per_page_product+'&category='+category_id).then(function(result) {
        // console.log(result);
        that.setState({
          isLoaded: true,
          total_items: result.headers['x-wp-total'],
          items: JSON.parse(result.toJSON().body)
        });
      });
    }
      componentDidMount() {
      this.getcatData();
      }
      pageChanged(e) {
    // console.log(e.target.text);
        this.setState({ currentPage: e.target.text });
        this.getcatData(e.target.text);
      }
      catproductlist(){
        return (
            this.state.items.map((item) => {
              return (
                  <Col key={item.id} xs={3} className="product_item"> 

                  <div key={item.id}>
                   
                    <img width="100%" alt="product" src={item.images[0].src} />
                    <Link to={`/product/${item.id}`}><h4>{item.name}</h4></Link>
                    <h6> ${item.price}</h6>
                      </div>
                  </Col>
                 
                 );
                })    
        );
      }
    render() {
        
      const all_page = this.state.total_items / this.state.per_page_product;
      let active = this.state.currentPage;
      let Pitems = [];   
      for (let number = 1; number <= all_page; number++) {
        Pitems.push(
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>
        );
      }

const paginationBasic = (
  <div>
    <Pagination onClick={this.pageChanged} >{Pitems}</Pagination>
   
  </div>
);

        if (!this.state.isLoaded) {
          return (
             <Spinner animation="border" variant="primary" />
          );
        }
     return(
        <div className="main_div_style bg-light-purple dib pa4 tc">
        <Header />
      <Container>
        <Row>
        <Col xs={3}>
      
           < SideMenu />
         </Col>
         <Col xs={9}>
         <Row>
          {this.catproductlist()}
      </Row>
      </Col>
       </Row>        
           <div className="page_cont">
           {paginationBasic}
          </div>  
        </Container>
</div>
      );
    }
  }
export default ProductCategories;