import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import SideMenu from '../../components/SideMenu';
import Pagination from '../../components/Pagination';
import productData from '../../data/productData.json';
import { Container, Row, Col } from 'react-bootstrap';
import shopMenu from '../../config/shopMenuConfig';

const filters = {
  all: data => data,
  festival: data => data.filter((product) => product.badge === "節日精選"),
  popularity: data => data.filter((product) => product.badge === "人氣推薦"),
  new: data => data.filter((product) => product.badge === "新品上市"),
}

export default function Shop() {

  const data = productData;

  const [filterType, setFilterType] = useState('all');

  // 切換過濾代碼
  const handleFilterType = (type) => {
    setFilterType( filterType => filterType = type );
  }

  const [filterData, setFilterData] = useState(data)
  const handleFilter = (filterType) => {
    setFilterData( filters[filterType](data) )
  }

  useEffect(() => {
    handleFilter( filterType )
  },[ filterType ])

  return (
    <Container className="mt-5 mb-2 pt-5">
      <Row>
        <Col lg={3} md={4}>
          <div className="sticky-navbar">
            <Search />
            <SideMenu title = {'商品類別'} menu = {shopMenu} onClick = {handleFilterType} />
          </div>
        </Col>
        <Col lg={9} md={8}>
          <Pagination data = {filterData}/>
        </Col>
      </Row>
    </Container>
  )
}
