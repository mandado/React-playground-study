import React, { Component } from 'react';

const productAddSection = {
    padding: '15px',
    width: '40%',
    borderRight: '1px solid #EEE'
    // boxShadow: '0 2px 4px rgba(0, 40, 132, 0.54)',
    // borderBottom: '2px solid #002984'
};

const productForm = {
    padding: '10px',
};

const labelStyle = {
    display: 'block',
    color: '#000',
    padding: '5px 0'
};

const inputStyle = {
    padding: '10px 15px',
    borderRadius: '3px',
    border: 'none',
    // border: '1px solid #002984',
    fontSize: '15px',
    width: 'calc(100% - 30px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18), 0 -2px 4px rgba(0, 0, 0, 0.10)',
};

export default class ProductForm extends Component {
    render() {
        return (
            <section id="product-add" style={productAddSection}>
                <div style={productForm}>
                    <form>
                        <h1>Adicionar Novo Produto</h1>
                        <div className="form-group">
                            <label htmlFor="name" style={labelStyle}>Nome</label>
                            <input type="text" id="name" style={inputStyle} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price" style={labelStyle}>Preço</label>
                            <input type="text" id="price" style={inputStyle}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" style={labelStyle}>Descrição</label>
                            <textarea id="description" style={inputStyle} cols="30" rows="10"></textarea>
                        </div>
                    </form>         
                </div>   
            </section>
        );
    }
}