import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import ActivitiesList from '../../components/ActivitiesList';
import ProductsList from '../../components/ProductsList';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <ActivitiesList />
        <ProductsList />
      </Fragment>
    )
  }
}
