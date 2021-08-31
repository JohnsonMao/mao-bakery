import React from 'react'
import Banner from '../../components/Banner'
import Subscription from '../../components/Subscription';
import bannerData from '../../data/bannerData.json';

export default function News() {
  return (
    <>
      <Banner data = {bannerData} />
      <h2>News</h2>
      <Subscription />
    </>
  )
}
