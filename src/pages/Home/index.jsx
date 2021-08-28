import React from 'react';
import Banner from '../../components/Banner';
import ActivitiesList from '../../components/ActivitiesList';
import ProductsCarousel from '../../components/ProductsCarousel';
import bannerData from '../../data/bannerData.json';
import newsData from '../../data/newsData.json';
import productData from '../../data/productData.json';

export default function Home() {
  return (
    <>
      <Banner bannerData = {bannerData} />
      <ActivitiesList newsData = {newsData} />
      <ProductsCarousel productData = {productData} />
    </>
  )
}
