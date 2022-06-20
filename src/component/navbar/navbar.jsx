import React from "react";
import { Component } from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
const  Navbar = ()=> {

        return (
            <div className='Navbar sticky' >
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">News Monke</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">general</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology"> technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    
}

export default Navbar