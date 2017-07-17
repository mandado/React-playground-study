import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const ProductItemStyle = {
    width: '40%',
    borderRight: '1px solid #EEE',
};

const listStyle = {
    margin: 0,
    padding: 0,
    overflowY: 'auto',
    height: '520px'
};

export default class ProductList extends Component {

    render() {
        return (
            <section id="product-add" style={ProductItemStyle}>
                <ul style={listStyle}>
                   {this.props.products.map(item => <ProductItem product={item} onItemClick={this.props.selectProduct}  key={item._id}></ProductItem>)}
                </ul> 
            </section>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array
};

ProductList.defaultProps = {
  products: []
};
