import React, { Component } from 'react'

export default class Favorites extends Component {
  render() {
    return (
      <button className="btn btn-primary favorites rounded-circle fs-2 lh-1 pt-2 p-1" type="button">
        <i className="fas fa-heart"></i>
      </button>
    )
  }
}
