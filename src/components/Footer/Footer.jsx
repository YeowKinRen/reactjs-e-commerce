import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='bg-dark  p-5 mt-3'>
        <div className='container'>
        <div className="row">
            <div className="col-3">
                <ul className='list-unstyled'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Term and Condition</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="col-3">
            <ul className='list-unstyled'>
                    <li><a href="#">Men's Clothing</a></li>
                    <li><a href="#">Women's Clothing</a></li>
                    <li><a href="#">Jewelery</a></li>
                    <li><a href="#">Electronics</a></li>
                </ul>
                
            </div>
            <div className="col-3">
            <ul className='list-unstyled'>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Tiktok</a></li>
               
                </ul>
                
            </div>
            <div className="col-3">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi molestiae quidem accusantium magnam laborum velit.</p>   
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer