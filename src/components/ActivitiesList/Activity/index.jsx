import React, { Component } from 'react'

export default class Activity extends Component {
  render() {
    return (
      <li>
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-5">
              <div className="ratio ratio-1x1">
                <img src="https://github.com/JohnsonMao/Sweetaste/blob/master/img/pancake.jpg?raw=true" alt="pan cake"/>
              </div>
            </div>
            <div className="col-5">
              <div className="d-flex flex-column justify-content-center h-100 p-5">
                <h3 className="text-center">廚藝課程</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta consequuntur nemo beatae quos tenetur. Facere, magni. Facere, natus, repellendus praesentium assumenda porro vitae repellat eos rerum cupiditate iste asperiores in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
