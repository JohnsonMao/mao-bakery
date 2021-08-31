import React from 'react';
import Activity from './Activity';

import './_ActivitiesList.scss';

export default function ActivitiesList(props) {

  const { data } = props;
  const activies = data.map((item, index) => {
    return(
      <Activity
        key = {index}
        title = {item.title}
        content = {item.content}
        href = {item.href}
      />
    )
  })


  return (
    <section className="mb-5">
      <ul className="activitiesList">
        { activies }
      </ul>
    </section>
  )
}
