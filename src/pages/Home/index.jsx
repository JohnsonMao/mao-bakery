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
      <div className="mb-5">
        <Banner data = {bannerData} />
      </div>
      <ActivitiesList data = {newsData} />
      <ProductsCarousel data = {productData} />
      <Subscription />
    </>
  )
}
