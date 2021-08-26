import React, { useState } from 'react';
import Search from '../../components/Search';
import FilterList from '../../components/FilterList';
import Pagination from '../../components/Pagination';
import productData from '../../data/productData.json';

export default function Shop() {

  const data = productData;

  const [filterType, setFilterType] = useState('all');

  // 切換過濾代碼
  const handleFilterType = (type) => {
    setFilterType( filterType => filterType = type );
  }

  return (
    <div className="container mt-5 mb-2 pt-5">
      <div className="row">
        <div className="col-3">
          <div className="sticky-sideNavbar">
            <Search />
            <FilterList onClick = {handleFilterType} />
          </div>
        </div>
        <div className="col-9">
          <Pagination filterType = {filterType} data = {data}/>
        </div>
      </div>
    </div>
  )
}
