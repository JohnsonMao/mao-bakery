import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/core';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([ Autoplay, Pagination, Navigation, EffectFade ])

export default function Banner(props) {
  
  const { data } = props;
  const slides = data.map((item, index) => {
    return(
      <SwiperSlide key = {`slide-${index}`} tag = "li" className = "h-100">
        <img 
          src = {`https://github.com/JohnsonMao/Sweetaste/blob/master/img/${ item.src }?raw=true`} 
          className = "d-block cover w-100 h-100"
          alt = {item.title} 
        />
      </SwiperSlide>
    )
  })

  return (
    <Swiper
      spaceBetween = {50}
      centeredSlides = {true}
      autoplay = {{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination = {{
        clickable: true,
      }}
      navigation
      effect = "fade"
      loop = {true}
      wrapperTag = "ul"
      tag = "section"
      className = "vh-100 mb-5"
    >
      { slides }
    </Swiper>
  )
}
