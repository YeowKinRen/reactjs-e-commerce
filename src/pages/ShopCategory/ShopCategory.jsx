import React from 'react'
import './ShopCategory.css'
import Banner from '../../components/Banner/Banner'


const ShopCategory = ({image, title}) => {
  return (
    <div>
      <Banner image={image} title={title}/>
    </div>
  )
}

export default ShopCategory
