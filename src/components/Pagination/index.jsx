import React, { useState, useEffect } from 'react';
import PageComponent from './PageComponent';
import ProductCards from '../ProductCards';
import filterFunc from './filterFunc';

const filters = {
  all: data => data,
  festival: data => data.filter((product) => product.badge === "節日精選"),
  popularity: data => data.filter((product) => product.badge === "人氣推薦"),
  new: data => data.filter((product) => product.badge === "新品上市"),
  food: data => data.filter((product) => product.badge === "食材"),
  tool: data => data.filter((product) => product.badge === "器具"),
}

export default function Pagination(props) {

  const { filterType, data } = props;
  // 過濾資料
  const [filterData, setFilterData] = useState(data)
  const handleFilter = (filterType) => {
    setFilterData(filters[filterType](data))
  }
  // 查詢的產品數量
  const totalNum = filterData.length;
  // 每頁顯示產品數量
  const displayNum = 6;
  // 總頁數
  const totalPage = Math.ceil( totalNum / displayNum );
  // 當前頁碼
  const [currentPage, setCurrentPage] = useState(1);
  // 當前頁碼產品
  const [indexList, setIndexList] = useState([])
  // 前往頁數
  const [goPage, setGoPage] = useState(1);

  // 資料初次渲染
  useEffect(()=>{
    handleFilter(filterType)
    pageClick(1)
  },[])

  // 換頁功能
  const pageClick = (pageNum) => {
    if( pageNum > totalPage || pageNum <= 0 ) return;
    if( pageNum !== currentPage ) 
      setCurrentPage( currentPage => currentPage = pageNum );
    const newIndexList = [];
    const maxIndex = totalNum > displayNum * pageNum ? displayNum * pageNum : totalNum;
    for(let i = (pageNum - 1) * displayNum; i < maxIndex; i++ ){
      newIndexList.push( filterData[i] )
    }
    setIndexList( indexList => indexList = newIndexList )
    setGoPage( goPage => goPage = pageNum )
  }
  
  // 下一頁
  const nextPage = () => {
    if( currentPage === totalPage ) return
    pageClick(currentPage + 1)
  }

  // 上一頁
  const prevPage = () => {
    if( currentPage === 1 ) return
    pageClick(currentPage - 1)
  }

  // 切換到輸入的頁數
  const goSwitchPage = (e) => {
    if( e.key === 'Enter') {
      pageClick(e.target.value);
      e.target.value = '';
    }
  }

  // product List
  const showProducts = indexList.map((item, index) => {
    return(
      <li key={`product-${index}`}>
        <ProductCards 
          src = {item.src}
          title = {item.title}
          price = {item.price}
          badge = {item.badge}
        />
      </li>
    )
  })

  return (
    <section className="mt-2">
      <ul className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
        { showProducts }
      </ul>
      <PageComponent 
        currentPage = {currentPage}
        total = {totalNum}
        totalPage = {totalPage}
        displayNum = {displayNum}
        pageClick = {pageClick}
        prevPage = {prevPage}
        nextPage = {nextPage}
        goPage = {goPage}
        goSwitchPage = {goSwitchPage}
      />
    </section>
  )
}
