import React, { useState, useEffect, useRef } from 'react';
import {  } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../../assets/Logo.webp';
import './Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const menuRef = useRef(null);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`header ${menuOpen ? 'open' : ''}`} ref={menuRef}>
            <NavLink className='name_signature' to='/'><img src={Logo} alt='home_screen' className='homescreen' /></NavLink>
            <div className='menu_icon' onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? 'open' : ''}`}></i>
            </div>
            <nav className={`header_links ${menuOpen ? 'open' : ''}`}>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/#about'>ABOUT US</NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/ContactForm'>CONTACT US</NavLink>
            </nav>
        </div>
    );
}

export default Header;
