import React from 'react'

export default function Activity(props) {

  const { title, description, href } = props;
  return (
    <li>
      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-5">
            <div className="ratio ratio-1x1">
              <img 
              src="https://github.com/JohnsonMao/Sweetaste/blob/master/img/pancake.jpg?raw=true" 
              className="cover"
              alt="pan cake"/>
            </div>
          </div>
          <div className="col-5">
            <div className="d-flex flex-column justify-content-center h-100 p-5">
              <h3 className="text-center fs-1">{ title }</h3>
              <p className="fs-4">
                { description }
              </p>
              <a href={ href }>了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
