import React, { useState, useEffect, useRef } from 'react';
import {  } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
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
            <NavLink className='name_signature' to='/'>Franck Gullit</NavLink>
            <div className='menu_icon' onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? 'open' : ''}`}></i>
            </div>
            <nav className={`header_links ${menuOpen ? 'open' : ''}`}>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/'>ACCUEIL</NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/Portfolio'>PORTFOLIO</NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/CV'>MON CV</NavLink>
            </nav>
        </div>
    );
}

export default Header;
