import React, { Component } from 'react';
import Indicator from './Indicator'

export default class BannerIndicators extends Component {
  render() {
    return (
      <ul className="d-flex">
        {
          this.props.data.map((item, index) => {
            return(
              <Indicator
                key = {index}
                src = {item.src}
                title = {item.title}
                index = {index}
                active = {this.props.active}
                onClick = {this.props.onClick}
                onMouseOut = {this.props.onMouseOut}
              />
            )
          })
        }
      </ul>
    )
  }
}
