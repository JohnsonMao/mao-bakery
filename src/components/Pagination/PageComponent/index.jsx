import React from 'react'
import { Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

export default function PageComponent(props) {
  const { 
    currentPage, 
    total, 
    totalPage,
    pageClick, 
    prevPage, 
    nextPage, 
    goPage, 
    goSwitchPage 
  } = props;

  // 當前頁碼
  let cur = currentPage;
  // 頁碼數列
  const pageNum = [];
  // 開頭頁碼
  let begin;
  // 頁碼長度
  let len;
  // 超過 7 頁，固定顯示 7 頁
  if(totalPage > 7){
    len = 7;
    // 當剩下3頁時，開頭頁碼固定
    if(cur >= (totalPage - 3)){
      begin = totalPage - 6;
    // 頁碼前 4 頁，開頭頁碼固定 1
    } else if (cur <= 4){
      begin = 1;
    // 當在中間時，開頭頁碼固定為當前頁碼 -3
    } else {
      begin = cur - 3;
    }
  // 沒超過 7 頁，最大值為上限
  } else {
    len = totalPage;
    begin = 1;
  }
  // 頁碼推送進數列
  for(let i = 0; i < len; i++) {
    let cur = currentPage;
    let showI = begin + i;
    if(cur == showI) {
      pageNum.push({num : showI, cur : true});
    } else {         
      pageNum.push({num : showI, cur : false});
    }    
  } 

  // 頁碼
  const pages = pageNum.map((curPageNum, index) => {   
    return(
      <Pagination.Item key={index} 
        onClick = {() => pageClick(curPageNum.num)} 
        className={curPageNum.cur ? 'active' : ''}>
        {curPageNum.num}
      </Pagination.Item>
    )
  })

  return (
    <nav className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <Pagination className="m-2">
        <li className="page-item">
          <DirectionBtn to="left" onClick={ prevPage } />
        </li>
        { pages }
        <li className="page-item">
          <DirectionBtn to="right" onClick={ nextPage } />
        </li>
      </Pagination>
      <div className="d-flex align-items-center text-primary">
        <span>總共 {total} 個商品，共 {totalPage} 頁，前往</span>
        <input type="number" 
          className="form-control border-primary w-25 mx-2" 
          placeholder={goPage}
          onKeyDown={goSwitchPage}/>
        <span>頁</span>
      </div>
    </nav>
  )
}

// btn component
function DirectionBtn(props) {
  return (
    <button className="page-link" onClick={props.onClick} type="button">
      {
        props.to === 'right' ? <FontAwesomeIcon icon={faCaretRight} /> :
        <FontAwesomeIcon icon={faCaretLeft} />
      }
    </button>
  )
}
