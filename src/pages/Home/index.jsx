import React from 'react';
import Banner from '../../components/Banner';
import ActivitiesList from '../../components/ActivitiesList';
import ProductsCarousel from '../../components/ProductsCarousel';
import Subscription from '../../components/Subscription';
import bannerData from '../../data/bannerData.json';
import newsData from '../../data/newsData.json';
import productData from '../../data/productData.json';

export default function Home() {
  return (
    <>
      <Banner data = {bannerData} />
      <ActivitiesList data = {newsData} />
      <ProductsCarousel data = {productData} />
      <Subscription />
    </>
  )
}
