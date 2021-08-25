import React from 'react'

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

  const pageNum = [];

  // 依產品量產生頁數數列
  for(let i = 0; i < totalPage; i++ ) {
    pageNum.push(i + 1);
  }

  const pages = pageNum.map((item, index) => {
    return(
      <li key={`page-${index + 1}`}
        className="page-item">
        <button onClick={() => pageClick(index + 1)} 
          className={`page-link ${currentPage === (index + 1) ? 'active' : ''}`} 
          type="button">
            {item}
        </button>
      </li>
    )
  })

  return (
    <nav className="d-flex justify-content-center align-items-center">
      <ul className="pagination m-2">
        <li className="page-item">
          <DirectionBtn to="left" onClick={prevPage} />
        </li>
        { pages }
        <li className="page-item">
          <DirectionBtn to="right" onClick={nextPage} />
        </li>
      </ul>
      <div className="d-flex align-items-center text-primary">
        <span>總共 {total} 個商品，共 {totalPage} 頁，前往</span>
        <input type="number" 
          className="form-control border-primary w-25 mx-2" 
          placeholder={goPage}
          onChange={goSwitchPage}/>
        <span>頁</span>
      </div>
    </nav>
  )
}

// btn component
function DirectionBtn(props) {
  return (
    <button className="page-link" onClick={props.onClick} type="button">
      <i className={`fas fa-caret-${props.to}`}></i>
    </button>
  )
}
