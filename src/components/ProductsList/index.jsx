import React, { Component } from 'react'
import Product from './Product';
import Arrows from '../Arrows';

export default class ProductsList extends Component {
  render() {
    return (
      <div className="container position-relative">
        <div className="w-75 mx-auto">
          <ul className="row row-cols-3 flex-nowrap overflow-hidden mb-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        </div>
        <Arrows direction = {'left'} color = {'primary'} />
        <Arrows direction = {'right'} color = {'primary'} />
      </div>
    )
  }
}
