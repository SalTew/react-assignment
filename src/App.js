import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Icon, Image } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Navigation from './components/nav-bar';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      pages: [],
      filters: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

    const url = 'https://demo5540272.mockable.io/listingAPI';
    fetch(url)
      .then((response) => response.json())
      .then(json => {
        const products = json.data.listing.products;
        const pagination = json.data.listing.pagination;
        const filters = json.data.listing.filters;

        console.log(products);
        console.log(pagination);
        console.log(filters);

        this.setState({
          isLoaded: true,
          products: products,
          pages: pagination,
          filters: filters,
        })
        console.log("products", this.state.products)
      });
  }

  render() {
    var { isLoaded, products } = this.state;

    if (!isLoaded) {
      return <div><h1>Loading...</h1></div>;
    }

    else {
      return (
        <div className='container'>
          <h2 className="page-header">The Souled Store</h2>
          <Navigation />



          <div className="product__details">
            {
              products.map(({ id, product, images, category, price }, i) => (
                <Card key={id}>

                  <Card.Content>

                    {images.map((pic, j) =>
                      (< Image key={j} src={pic} alt="T-shirt"
                        style={{ width: 150 + 'px', height: 45 + 'px' }} />
                      ))}

                    <br />
                    </Card.Content>
                    <div className="product-info">
                      <span id="product-name">
                        <h6>{product}</h6>
                      </span>

                      <span id="category"><p>{category.name}</p></span>
                      <span id="price"> <p>{price}</p></span>
                    </div>

                  
                </Card>
              ))
            }
          </div>
        </div>
      );
    }

  }
}

export default App;


//<div>
//   {
//     products.map(({ product, images, price }, i) => (
//       <div key={i} className="card">
//         <div className="card-body">
//           <h1>{product}</h1>
//           {images.map((pic, j) => <p key={j}>{pic}</p>)}
//           <p>{price}</p>
//         </div>
//       </div>
//     ))
//   }
// </div>
{/* <div key={i} className="card"> */ }
{/* <div className="card-body"> */ }