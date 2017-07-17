import React, { Component } from 'react';

const itemStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid #EEE',
    padding: '15px',
    cursor: 'pointer'
};

const titleStyle = {
    width: '65%',
    margin: 0,
    color: '#3f50b5'
};

const priceStyle = {
    width: '35%',
    margin: 0,
    color: '#4caf50'
};

const descriptionStyle = {
    textAlign: 'justify',
    color: '#607d8b'
};

export default class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.clickItem = this.clickItem.bind(this);
    }

    clickItem() {
        this.props.onItemClick(this.props.product);
    }

    render() {
        return (
            <li onClick={this.clickItem} style={itemStyle}>
                <h1 style={titleStyle}>{this.props.product.name}</h1>
                <p style={priceStyle}>{this.props.product.price} R$</p>
            </li>
        );
    }
}