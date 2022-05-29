import React from 'react';
import '../navbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav'>
        <a href="#" className='nav_logo'>Logo</a>
        <ul>
            <li className='nav_item'>
                <Link to="/" className='nav_link'>Home</Link>
            </li>

            <li className='nav_item'>
                <Link to="/About" className='nav_link'>About</Link>
            </li>

            <li className='nav_item'>
                <Link to="/Contact" className='nav_link'>Contact</Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;