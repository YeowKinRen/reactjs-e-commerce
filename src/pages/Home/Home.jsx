import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Featured from '../../components/Featured/Featured'

const Home = ({image, title}) => {
  const subtitle = "Shop Till You Drop";
  
  return (
    <div>
      <Banner image={image} title={title} subtitle={subtitle}/>
    <Featured></Featured>
    </div>
  )
}

export default Home
