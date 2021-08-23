import React, { Component } from 'react';
import BannerItem from './BannerItem';
import BannerIndicators from './BannerIndicators';
import Arrows from '../Arrows';

export default class Banner extends Component {

  // 初始狀態
  state = {
    src: this.props.data[0].src,
    title: this.props.data[0].title,
    active: this.props.data[0].src,
  }

  // 計時器
  timer = null;

  // 索引值
  index = 0;

  // 輪播圖總數
  total = this.props.data.length;

  // 啟動計時器
  setTimer = () => {
    this.stopTimer();
    const { data } = this.props;

    this.timer = setInterval(() => {
      this.index = (this.index + 1) % this.total;
      const src = data[ this.index ].src;
      const title = data[ this.index ].title;

      this.setState({
        src: src,
        title: title,
        active: src,
      });
    }, this.props.speed)
  }

  // 關閉計時器
  stopTimer = () => {
    clearInterval( this.timer )
  }

  // 初始化啟動計時器
  componentDidMount(){
    this.setTimer();
  }

  // 方向按鈕
  next = (event) => {
    this.stopTimer();
    const { data } = this.props;
    const direction = event.target.dataset.direction;

    switch(direction){
      case 'right':
        this.index = (this.index + 1) % this.total;
        const rightSrc = data[this.index].src;
        const rightTitle = data[this.index].title;

        this.setState({
          src: rightSrc,
          title: rightTitle,
          active: rightSrc,
        });
        break;

      case 'left':
        this.index <= 0 ? 
          this.index = this.total - 1 : 
          this.index--;
        const leftSrc = data[this.index].src;
        const leftTitle = data[this.index].title;

        this.setState({
          src: leftSrc,
          title: leftTitle,
          active: leftSrc,
        });
        break;
    }
  }

  // 前往按鈕
  move = (event) => {
    this.stopTimer();
    const { dataset } = event.target;

    this.setState({
      src: dataset.src,
      title: dataset.title,
      active: dataset.src,
    });

    this.index = dataset.index;
  }

  render() {
    const { data } = this.props;
    return (
      <figure className="carousel slide carousel-fade vh-100 mb-5">
        <div className="carousel-indicators">
          <BannerIndicators data = {data} 
            active = {this.state.active} 
            onClick = {this.move} onMouseOut = {this.setTimer}/>
        </div>
        <ul className="carousel-inner h-100">
          {
            data.map((item, index) => {
              return(
                <BannerItem 
                  key = {index} 
                  active = {this.state.active} 
                  src = {item.src} 
                  title = {item.title} 
                />
              )
            })
          }
        </ul>
        <Arrows direction = {'left'} color = {'primary'} 
          onClick = {this.next} onMouseOut = {this.setTimer}/>
        <Arrows direction = {'right'} color = {'primary'} 
          onClick = {this.next} onMouseOut = {this.setTimer}/>
      </figure>
    )
  }
}
