import React, { Component } from 'react';
import ProductItem from './ProductItem';

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
                   {Array.from(Array(30).keys()).map(key => <ProductItem key={key}></ProductItem>)}
                </ul> 
            </section>
        );
    }
}