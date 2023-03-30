import React from "react";
import "./Navbar.css";
import Login from '../views/Login'
import About from '../views/About'
import Home from '../views/Home'
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'

export default (props) => {
    return (
    <div >
        <div>
        <div className="navbar">
            <div id="home">
                <Link to="/home">ITA JR</Link>
            {/* <a href="#">ITA JR</a> */}
            </div>
            <div>
                <Link to="/about">Sobre nós</Link>
                <Link to="/login">Login</Link>
            {/* <a href="#">Sobre nós</a>
            <a href="#">Login</a> */}
            </div>
        </div>
        </div>
    </div>
    )
};
