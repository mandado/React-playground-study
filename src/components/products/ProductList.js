import React, { Component } from 'react';
import ProductItem from './ProductItem';

const ProductItemStyle = {
    padding: '15px',
    width: '60%',
};

const listStyle = {
    margin: 0,
    padding: 0
};

export default class ProductList extends Component {
    render() {
        return (
            <section id="product-add" style={ProductItemStyle}>
                <ul style={listStyle}>
                   <ProductItem></ProductItem>
                </ul> 
            </section>
        );
    }
}