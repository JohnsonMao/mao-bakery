import React, { useState, useReducer } from 'react';
import Search from '../../components/Search';
import FilterList from '../../components/FilterList';
import Pagination from '../../components/Pagination';
import productData from '../../data/productData.json';

function filterType( data, filter ) {
  switch( filter.type ) {
    case 'all':
      console.log(data.filterData)
      return { data: data.filterData}
    case 'festival':
      return { data: data.filterData.filter(item => item.badge === "節日精選")}
    case 'popularity':
      return { data: data.filterData.filter(item => item.badge === "人氣推薦")}
    case 'new':
      return { data: data.filterData.filter(item => item.badge === "新品上市")}
    case 'food':
      return { data: data.filterData.filter(item => item.badge === "食材")}
    case 'tool':
      return { data: data.filterData.filter(item => item.badge === "器具")}
  }
}

export default function Shop() {

  const data = productData;
  const [filter, filterFunc] = useReducer(filterType, { filterData: data })
  return (
    <div className="container mt-5 mb-2 pt-5">
      <div className="row">
        <div className="col-3">
          <div className="sticky-sideNavbar">
            <Search />
            <FilterList onClick={filterFunc} />
          </div>
        </div>
        <div className="col-9">
          <Pagination productData = {data}/>
        </div>
      </div>
    </div>
  )
}
