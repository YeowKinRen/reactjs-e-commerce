import React from 'react'
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'

const Header = () => {

    const {totalItemsInCart} = useCart();

    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
                <a className="navbar-brand">Shopper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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