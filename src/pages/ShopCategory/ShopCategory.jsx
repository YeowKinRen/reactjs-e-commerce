import React from 'react'
import './ShopCategory.css'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'


const ShopCategory = ({image, title}) => {
  return (
    <div>
      <Banner image={image} title={title}/>
      <Category category={title}></Category>

    </div>

    
  )
}

export default ShopCategory
