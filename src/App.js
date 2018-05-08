import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

// import AddProduct from './AddProduct';
// import ProductItem from './ProductItem';

import CalculatorContainers from './containers/CalculatorContainers.js';
import InputContainers from './containers/InputContainers';
import TodoContainers from './containers/TodoContainers'

// import { createStore } from 'redux'
// function counter (state=0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// let store = createStore(counter);

// store.subscribe(() =>
//   console.log(store.getState())
// )

// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
]

localStorage.setItem('products', JSON.stringify(products));

const CalculatorRouter = () => (
  <div>
    <CalculatorContainers />
  </div>
);

const InputRouter = () => (
  <div>
    <InputContainers />
  </div>
)

const todoRouter = () => (
  <div>
    <TodoContainers />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();

    this.setState({
      products
    })
  }

  getProducts() {
    return this.state.products;
  }

  onAdd(name, price) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({
      products
    });
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    })

    this.setState({
      products: filteredProducts
    })
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price
      }

      return product;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">計數器</Link>
              </li>
              <li>
                <Link to="/input">輸入框</Link>
              </li>
              <li>
                <Link to="/todo">購物車</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={CalculatorRouter} />
            <Route path="/input" component={InputRouter} />
            <Route path="/todo" component={todoRouter} />
          </div>
        </Router>
        <hr />
        {/* <h1>Products Manager</h1>

        <AddProduct
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        } */}
      </div>
    );
  }
}

export default App;
