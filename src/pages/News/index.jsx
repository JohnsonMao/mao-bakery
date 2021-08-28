import React from 'react'
import Banner from '../../components/Banner'
import bannerData from '../../data/bannerData.json';

export default function News() {
  return (
    <>
      <Banner bannerData = {bannerData} />
      <h2>News</h2>
    </>
  )
}
