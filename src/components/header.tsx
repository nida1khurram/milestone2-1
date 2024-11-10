"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link href="#">NK-Jewellery</Link>
                </div>
                <ul className={isMobile ? "navbar-menu mobile" : "navbar-menu"}>
                    <li className="navbar-item">
                        <Link href={'/'} className="navbar-link" onClick={() => setIsMobile(false)}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link href={'about'} className="navbar-link" onClick={() => setIsMobile(false)}>About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link href={'products'} className="navbar-link" onClick={() => setIsMobile(false)}>Products</Link>
                    </li>
                    <li className="navbar-item">
                        <Link href={'contact-us'} className="navbar-link" onClick={() => setIsMobile(false)}>Contact</Link>
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

    
      


