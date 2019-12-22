import React, { Component } from "react";
import { WooCommerce } from "./WooConnection.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

//   const ProductIdComponent =(props)=>{
//   return(
//     <button onclick={props.onclick}
//             value={props.name}>
//     </button>
//     )
// }
// <productIdComponent name="1" onclick={this.btn-click}/>


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
      <div className="main_div_style ma12 bg-light-purple dib pa4 tc">
        {this.state.items.map((val, index) => (
        <div class="col-sm-4">            
          <img src={val.images[0].src} alt="" />
          <h2>${val.price}</h2>
          <p>{val.name}</p>
        </div>
       ))}
      </div>)
  }    

}
export default Home;