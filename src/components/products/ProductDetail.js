import React, { Component } from 'react';

const itemStyle = {
    borderBottom: '1px solid #EEE',
    padding: '15px',
    width: '60%'
};

const titleStyle = {
    width: '80%',
    float: 'left',
    height: 30,
    margin: 0,
    color: '#3f50b5'
};

const priceStyle = {
    height: 30,
    float: 'right',
    width: '16%',
    margin: 0,
    color: '#4caf50'
};

const descriptionStyle = {
    textAlign: 'justify',
    color: '#607d8b',
    width: '100%'
};

export default class ProductDetail extends Component {
    render() {
        return (
            <section style={itemStyle}>
                <h1 style={titleStyle}>Produto 00 1</h1>
                <p style={priceStyle}>20,00 R$</p>

                <p style={descriptionStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repellat ab eius assumenda repellendus, similique mollitia a cumque hic rerum porro nesciunt maiores quos nihil voluptatem odit vero, voluptate laudantium?
                </p>
            </section>
        );
    }
}