import React, { Component } from 'react';

export default class ProductForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Preço</label>
                    <input type="text" id="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" cols="30" rows="10"></textarea>
                </div>
            </form>
        );
    }
}