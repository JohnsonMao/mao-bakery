import React, { Component } from 'react';
import Activity from './Activity';

export default class ActivitiesList extends Component {
  render() {
    const { data } = this.props;

    return (
      <section className="mb-5">
        <ul className="activitiesList">
          {
            data.map((item, index) => {
              return(
                <Activity 
                  key = {index}
                  title = {item.title}
                  description = {item.description}
                  href = {item.href}
                />
              )
            })
          }
        </ul>
      </section>
    )
  }
}
