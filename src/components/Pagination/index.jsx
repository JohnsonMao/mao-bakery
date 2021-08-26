import React, { useState, useEffect, useReducer } from 'react';
import PageComponent from './PageComponent';
import ProductCards from '../ProductCards';
import filterFunc from './filterFunc';

export default function Pagination(props) {

  // 初始資料
  const totalData = [...props.data];
  // 過濾資料
  const [filter, handleFilter] = useReducer(filterFunc, {data: totalData})
  // 查詢的產品數量
  const totalNum = totalData.length;
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
    pageClick(1)
  },[])

  // 換頁功能
  const pageClick = (pageNum) => {
    if( pageNum > totalPage || pageNum <= 0 ) return;
    if( pageNum !== currentPage ) 
      setCurrentPage( currentPage => currentPage = pageNum );
    const newIndexList = [];
    for(let i = (pageNum - 1) * displayNum; i < displayNum * pageNum; i++ ){
      newIndexList.push( totalData[i] )
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
    pageClick(e.target.value);
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
      <ul className="row row-cols-3 g-3">
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
