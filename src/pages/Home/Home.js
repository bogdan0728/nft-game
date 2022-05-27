import React from 'react'
import Topbar from '../../components/Topbar'
import Banner from '../../components/Banner'
import Feature from '../../components/Feature'

import '../../assets/scss/home/home.scss'
const Home = () => {
  return (
    <div className="home-page">
      <Topbar />
      <Banner />
      <Feature />
      <div className="d-flex justify-content-center"></div>
    </div>
  )
}

export default Home
