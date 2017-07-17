import React, { Component } from 'react';
import ProductForm from './components/products/ProductForm';
import ProductList from './components/products/ProductList';

const styleApp = { 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  width: '100%',
  height: '100%',  
};

const productArea = {
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14)',
  height: '500px',
  width: '780px',
  fontFamily: 'Lato',
  justifyContent: 'center',
  display: 'flex', 
};

class App extends Component {
  render() {
    return (
      <div style={styleApp}>
        <section id="product-area" style={productArea}>
          <ProductForm></ProductForm>
          <ProductList></ProductList>
        </section>
      </div>
    );
  }
}

export default App;
