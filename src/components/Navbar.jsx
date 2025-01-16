import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cartProducts } from "./Data/Cart"

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3" aria-label="Eighth navbar example">
                <div className="container">
                    <Link className="navbar-brand text-light fs-4 fw-bold" to="/">MyCart.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  d-flex align-items-center">
                            <li className="nav-item ">
                                <Link className="nav-link fw-bold text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link text-light" to="/product">Orders</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link text-light" to="/product">Wishlist</Link> */}
                            </li>

                            <li className="nav-item position-relative">
                                <Link className="btn btn-light px-4 fw-bold text-center ms-2" to="/cart"> Cart </Link>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown07">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
