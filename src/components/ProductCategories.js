import React, { Component } from "react";
import { WooCommerce } from "./WooConnection.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header.js";
import '../CommonComponent.css';
class ProductCategories extends Component {
  constructor({ match :{ params :{id} } }) {
    super();
    this.state = {
      error: null,
	  isLoaded: false,
	  category_id : id,
	  categories: [],
	  products: [],
	  totalCount: 0
    };
  }

  getProductCategories() {
    const that = this;
    WooCommerce.getAsync("products/categories").then(function(result) {
      that.setState({
        isLoaded: true,
        categories: JSON.parse(result.toJSON().body)
      });
    });
  }
  componentDidMount() {
	this.getProductCategories();
  }
  render() {
    return (
    	  <div className="main_div_style bg-light-purple dib pa4 tc">
    	  <Header />
        <section>
		<div >
		<h2>Category</h2>
				<div className="t dt--fixed w-100 ">
				{this.state.categories.map((val, index) => (
					<div key={index+1}>
							<h4 className="panel-title"><Link to={"/category/"+val.id}>{val.name}</Link></h4>
					</div>
				))}
				</div>
				</div>
	</section>
      </div>
    );
  }
}
export default ProductCategories;