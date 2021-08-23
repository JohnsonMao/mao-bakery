import React, { Component } from 'react'
import Product from './Product';
import Arrows from '../Arrows';

export default class ProductsList extends Component {

  state = {
    translate: 0,
    speed: 2000,
    column: 100 / 3,
  }

  // 計時器
  timer = null;

  // 索引
  index = 1;

  // 輪播圖總數
  total = this.props.data.length;

  setTimer = () => {
    this.stopTimer();
    const { translate, speed, column } = this.state;
    this.timer = setInterval(() => {
      let newTranslate = translate - column * this.index;
      this.index++

      if( -newTranslate >= this.total * column) {
        newTranslate = 0;
        this.index = 1;
      }
      this.setState({translate: newTranslate});
    }, speed)
  }

  // 關閉計時器
  stopTimer = () => {
    clearInterval( this.timer )
  }

  // 初始化啟動計時器
  componentDidMount(){
    this.setTimer();
  }

  render() {
    const { data } = this.props;
    const { translate } = this.state;
    return (
      <div className="container position-relative">
        <div className="w-75 mx-auto overflow-hidden mb-5">
          <ul className="row row-cols-3 flex-nowrap transition-1"
            style={{transform: `translate(${translate}%)`}}>
            {
              data.map((item,index) => {
                return(
                  <Product 
                    key = {index}
                    src = {item.src}
                    title = {item.title}
                    price = {item.price}
                    badge = {item.badge}
                  />
                )
              })
            }
            <Product
              src = {data[0].src}
              title = {data[0].title}
              price = {data[0].price}
              badge = {data[0].badge}
            />
            <Product
              src = {data[1].src}
              title = {data[1].title}
              price = {data[1].price}
              badge = {data[1].badge}
            />
            <Product
              src = {data[2].src}
              title = {data[2].title}
              price = {data[2].price}
              badge = {data[2].badge}
            />
          </ul>
        </div>
        <Arrows direction = {'left'} color = {'primary'} />
        <Arrows direction = {'right'} color = {'primary'} />
      </div>
    )
  }
}
