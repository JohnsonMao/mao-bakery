import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import ActivitiesList from '../../components/ActivitiesList';
import ProductsList from '../../components/ProductsList';

export default class Home extends Component {

  state = {
    bannerData: [
      { src: 'lemoncake.jpg', title: '檸檬蛋糕' },
      { src: 'walnutpie.jpg', title: '堅果派' },
      { src: 'cover.jpg', title: '毛毛烘焙坊' },
    ],
    speed: 3000,
    newsData: [
      { title: '廚藝課程',
        description: '邀請專業老師耐心解講，享受頂級設備的優質烘焙環境，熱愛烘焙的新手老手都歡迎。',
        href: '/news/course'
      },
      { title: '知識分享',
        description: '想知道各種美味甜點是怎麼做出來的？分享給您影片及食譜，一起輕輕鬆鬆在家跟著做烘焙喔！',
        href: '/news/knowledge'
      },
    ],
    productsData: [
      { src: 'donuts.jpg', title: '雪花甜甜圈', price: 48, badge: '新品上市' },
      { src: 'kiwisago.jpg', title: '奇異果西米露', price: 60, badge: '新品上市' },
      { src: 'berrypie.jpg', title: '莓果派', price: 420, badge: '新品上市' },
      { src: 'applepie.jpg', title: '蘋果派', price: 80, badge: '新品上市' },
      { src: 'cherrycake.jpg', title: '櫻桃蛋糕', price: 450, badge: '新品上市' },
      { src: 'strawberry.jpg', title: '草莓冰淇淋', price: 120, badge: '新品上市' },
    ]
  }

  render() {
    const { bannerData, speed, newsData, productsData } = this.state;
    return (
      <Fragment>
        <Banner data = {bannerData} speed = {speed}/>
        <ActivitiesList data = {newsData} />
        <ProductsList data = {productsData} />
      </Fragment>
    )
  }
}
