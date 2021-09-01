import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

export default function SideMenu(props) {
  const { title, menu, onClick } = props;
  const getMenu = (menu) => {
    return menu.map((item, index) => {
      return (
        <FilterBtn key={index} onClick={() => onClick( item.filterType )}>
          { item.title }
        </FilterBtn>
      )
    })
  }
  return (
    <nav className="text-center">
      <h2 className="rounded-top text-light fs-4 fw-bold bg-primary m-0 p-3">{ title }</h2>
      <ListGroup as={'ul'} className="sideMenu">
        { getMenu( menu ) }
      </ListGroup>
    </nav>
  )
}

function FilterBtn(props) {
  return (
    <ListGroup.Item as={'li'} className="border-0 p-0">
      <button className="btn btn-outline-primary rounded-0 w-100 fs-5 fw-bold p-2" {...props}/>
    </ListGroup.Item>
  )
}
