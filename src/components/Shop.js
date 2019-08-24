import React, {Component} from 'react';
import Product from "./Product";

export default class Shop extends Component {
    render() {
        return (
            <div>
                <h3>hello from shop</h3>
                <Product></Product>
            </div>
        );
    }
}