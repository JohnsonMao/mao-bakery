import React, { Component } from 'react';
import Activity from './Activity';

export default class ActivitiesList extends Component {
  render() {
    return (
      <section className="mb-5">
        <ul className="activitiesList">
          <Activity />
          <Activity />
        </ul>
      </section>
    )
  }
}
