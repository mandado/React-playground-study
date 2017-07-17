import React, { Component } from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
    borderBottom: '1px solid #EEE',
    padding: '15px',
    width: '60%'
};

const titleStyle = {
    width: '81%',
    float: 'left',
    height: 30,
    margin: 0,
    color: '#3f50b5'
};

const priceStyle = {
    height: 30,
    float: 'right',
    width: '19%',
    margin: 0,
    color: '#4caf50'
};

const descriptionStyle = {
    textAlign: 'justify',
    color: '#607d8b',
    width: '100%'
};

const ProductDetailMarkup = (props) => (
    <section style={itemStyle}>
        <h1 style={titleStyle}>{props.detail.name}</h1>
        <p style={priceStyle}>{props.detail.price} R$</p>

        <p style={descriptionStyle}>
            {props.detail.about}
        </p>
    </section>
);

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.detail) {
            return (
                <section style={itemStyle}>
                    <p>Nenhum produto selecionado</p>
                </section>
            );
        }

        return <ProductDetailMarkup  detail={this.props.detail} />
    }
}

ProductDetail.propTypes = {
    detail: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}