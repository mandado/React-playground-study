import React, { Component } from 'react';

const itemStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    borderBottom: '1px solid #EEE',
    padding: '15px',
    cursor: 'pointer'
};

const itemStyleSelected = {
    ...itemStyle,
    backgroundColor: '#e3f2fd'
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
        this.isSelected = this.isSelected.bind(this);
    }

    clickItem() {
        this.props.onItemClick(this.props.product);
    }

    isSelected(id) {
        return this.props.selectedProduct && this.props.selectedProduct._id === id;
    }

    render() {
        const { name, price, _id } = this.props.product;

        return (
            <li onClick={this.clickItem} style={this.isSelected(_id) && itemStyleSelected || itemStyle} >
                <h1 style={titleStyle}>{name}</h1>
                <p style={priceStyle}>{price} R$</p>
            </li>
        );
    }
}