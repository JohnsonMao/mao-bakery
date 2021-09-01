import React, { useState, useEffect } from 'react';
import PageComponent from './PageComponent';
import ProductCards from '../ProductCards';

export default function Pagination(props) {

  const { data } = props;
  const totalNum = data.length; // 查詢的產品數量
  const displayNum = 6; // 每頁顯示產品數量
  const totalPage = Math.ceil( totalNum / displayNum ); // 總頁數
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼
  const [indexList, setIndexList] = useState([]) // 當前頁碼產品
  const [goPage, setGoPage] = useState(1); // 前往頁數

  // 資料初次渲染
  useEffect(()=>{
    pageClick(1)
  },[ data ])

  // 換頁功能
  const pageClick = (pageNum) => {
    if( pageNum > totalPage || pageNum <= 0 ) return;
    if( pageNum !== currentPage ) 
      setCurrentPage( currentPage => currentPage = pageNum );
    const newIndexList = [];
    const maxIndex = totalNum > displayNum * pageNum ? displayNum * pageNum : totalNum;
    for(let i = (pageNum - 1) * displayNum; i < maxIndex; i++ ){
      newIndexList.push( data[i] )
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

  // products List
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
      <ul className="row row-cols-lg-3 row-cols-sm-2 g-3">
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
