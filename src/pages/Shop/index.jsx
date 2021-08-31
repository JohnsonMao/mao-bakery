import React, { useState } from 'react';
import Search from '../../components/Search';
import FilterList from '../../components/SideMenu';
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
        <div className="col-lg-3 col-md-4">
          <div className="sticky-sideNavbar">
            <Search />
            <FilterList onClick = {handleFilterType} />
          </div>
        </div>
        <div className="col-lg-9 col-md-8">
          <Pagination filterType = {filterType} data = {data}/>
        </div>
      </div>
    </div>
  )
}
