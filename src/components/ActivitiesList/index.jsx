import React from 'react';
import Activity from './Activity'

export default function ActivitiesList(props) {

  const { newsData: data } = props;
  const activies = data.map((item, index) => {
    return(
      <Activity
        key = {index}
        title = {item.title}
        description = {item.description}
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
