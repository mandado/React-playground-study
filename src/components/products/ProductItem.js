import React, { Component } from 'react';

const itemStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid #EEE',
    padding: '15px',
    cursor: 'pointer'
};

const titleStyle = {
    width: '75%',
    margin: 0,
    color: '#3f50b5'
};

const priceStyle = {
    width: '25%',
    margin: 0,
    color: '#4caf50'
};

const descriptionStyle = {
    textAlign: 'justify',
    color: '#607d8b'
};

export default class ProductItem extends Component {
    render() {
        return (
            <li style={itemStyle}>
                <h1 style={titleStyle}>Produto 00 1</h1>
                <p style={priceStyle}>20,00 R$</p>
            </li>
        );
    }
}