import React, { Component } from 'react';
import ProductItem from './ProductItem';

const ProductItemStyle = {
    width: '60%',
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
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                   <ProductItem></ProductItem>
                </ul> 
            </section>
        );
    }
}