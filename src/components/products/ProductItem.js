import React, { Component } from 'react';

const itemStyle = {
    display: 'flex',
    flexWrap: 'wrap'
};

const titleStyle = {
    width: '80%',
    margin: 0
};

const priceStyle = {
    width: '20%',
    margin: 0
};

export default class ProductItem extends Component {
    render() {
        return (
            <li style={itemStyle}>
                <h1 style={titleStyle}>Produto 00 1</h1>
                <p style={priceStyle}>20,00 R$</p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellat ab eius assumenda repellendus, similique mollitia a cumque hic rerum porro nesciunt maiores quos nihil voluptatem odit vero, voluptate laudantium?
                </p>
            </li>
        );
    }
}