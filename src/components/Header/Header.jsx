import React from 'react'
import './Header.css';
import { NavLink,Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext'
import { useState, useEffect } from "react"


const Header = () => {

    const {totalItemsInCart} = useCart();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        setIsNavCollapsed(true); // Collapse navbar when location changes
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                <a className="navbar-brand" href="/reactjs-e-commerce/">Shopper</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#basic-navbar-nav" 
                    aria-controls="basic-navbar-nav" 
                    aria-expanded={!isNavCollapsed ? true : false} 
                    aria-label="Toggle navigation" 
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''}  navbar-collapse`} id="basic-navbar-nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories/men's clothing">Men's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories/women's clothing">Women's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories/jewelery">Jewelery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categories/electronics">Electronics</NavLink>
                        </li>

                    </ul>
                    
                    <div className="d-flex">

                        <Link to="/cart"><button className="btn btn-outline-success me-2"><i className="bi bi-cart"></i> ({totalItemsInCart})</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header