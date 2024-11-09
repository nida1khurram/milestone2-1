"use client"

    import React, { useState } from 'react';
// import './navbar.css';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#">NK-Jewellery</a>
                </div>
                <ul className={isMobile ? "navbar-menu mobile" : "navbar-menu"}>
                    <li className="navbar-item">
                        <a href="#home" className="navbar-link" onClick={() => setIsMobile(false)}>Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link" onClick={() => setIsMobile(false)}>About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contact" className="navbar-link" onClick={() => setIsMobile(false)}>Contact</a>
                    </li>
                </ul>
                <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

    
      


