import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data : [],
      listing : [],
      products: []
    }
  }

  componentDidMount () {
    this.getProducts();
  }
  
  getProducts() {
    fetch('https://demo5540272.mockable.io/listingAPI')
      .then(results => results.json())
      .then(results => { 
        this.setState({ data: results })
        console.log(this.state.data)
        console.log(this.state.data.listing)
        // console.log(this.state.data.listing.products)
      })
  }

  render() {
    return (
      <ul>
        {this.state.products.map(function(product,index) {
          return (
            <div>
              <h2>{this.state.products}</h2>
              <h1>{product.id}</h1>
              <p>{product.artist}</p>
            </div>
          )
        })}
      </ul>
    );
  }
}

export default App;
