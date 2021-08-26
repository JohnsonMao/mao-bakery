import React from 'react';

export default function FilterList(props) {
  const { onClick } = props;
  return (
    <nav className="text-center">
      <h2 className="rounded-top text-light fs-4 fw-bold bg-primary m-0 p-3">商品類別</h2>
      <ul className="list-group">
        <FilterBtn onClick={() => onClick('all')}>全部</FilterBtn>
        <FilterBtn onClick={() => onClick('festival')}>節日精選</FilterBtn>
        <FilterBtn onClick={() => onClick('popularity')}>人氣推薦</FilterBtn>
        <FilterBtn onClick={() => onClick('new')}>新品上市</FilterBtn>
        <FilterBtn onClick={() => onClick('food')}>食材</FilterBtn>
        <FilterBtn onClick={() => onClick('tool')}>器具</FilterBtn>
      </ul>
    </nav>
  )
}

function FilterBtn(props) {
  return (
    <li className="list-group-item border-0 p-0">
      <button className="btn btn-outline-primary rounded-0 w-100 fs-5 fw-bold p-2" {...props}/>
    </li>
  )
}
