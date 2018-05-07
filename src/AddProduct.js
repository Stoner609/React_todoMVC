import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add Product</h3>
                <input placeholder="name" ref={nameInput => this.nameInput = nameInput}  />
                <input placeholder="price" ref={priceInput => this.priceInput = priceInput} />
                <button>Add Product</button>
            </form>
        );
    }
}

export default AddProduct;
