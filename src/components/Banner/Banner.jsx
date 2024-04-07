import React from 'react';
import './Banner.css';

const Banner = ({ image, title, subtitle }) => {
   return (
       <div className='jumbotron text-center text-danger'
           style={{ backgroundImage: `url(${image})`,
           backgroundSize: 'cover' }}>
           <h1 className='display-4'>{title}</h1>
           {subtitle && <p className='lead'>{subtitle}</p>}
       </div>
   )
}

export default Banner
