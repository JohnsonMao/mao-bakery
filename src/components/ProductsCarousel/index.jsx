import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import ProductCards from '../ProductCards';

import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([ Autoplay, Navigation ]);

export default function ProductsCarousel(props) {

  const { data } = props;
  const products = data.map((item, index) => {
    return(
      <SwiperSlide key = {`product-${index}`} tag = "li">
        <ProductCards 
          src = {item.src}
          title = {item.title}
          price = {item.price}
          badge = {item.badge}
        />
      </SwiperSlide>
    )
  })

  return (
    <section className="container">
      <Swiper
        slidesPerView = {1}
        spaceBetween = {15}
        breakpoints={{
          420: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          }
        }}
        autoplay = {{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        loop = {true}
        wrapperTag = "ul"
        className = "mb-5"
      >
        { products }
      </Swiper>
    </section>
  )
}
