import React, { Component } from 'react';
import ProductDetail from './components/products/ProductDetail';
import ProductList from './components/products/ProductList';
import Products from './data/products'; 

const styleApp = { 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  width: '100%',
  height: '100%',  
};

const productArea = {
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14)',
  height: '520px',
  width: '780px',
  fontFamily: 'Lato',
  justifyContent: 'center',
  display: 'flex', 
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: null,
      products: Products
    };

    this.showProductDetail = this.showProductDetail.bind(this);
  }

  showProductDetail(product) {
    this.setState({
      detail: product
    }); 
  }

  render() {
    return (
      <div style={styleApp}>
        <section id="product-area" style={productArea}>
          <ProductList selectProduct={this.showProductDetail} selectedProduct={this.state.detail} products={this.state.products}></ProductList>
          <ProductDetail detail={this.state.detail}></ProductDetail>
        </section>
      </div>
    );
  }
}

export default App;
