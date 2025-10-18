import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/Logo.webp';
import './Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`header ${menuOpen ? 'open' : ''}`} ref={menuRef}>
            <a className='name_signature' href="#about">
                <img src={Logo} alt='home_screen' className='homescreen' />
            </a>

            <div className='menu_icon' onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? 'open' : ''}`}></i>
            </div>

            <nav className={`header_links ${menuOpen ? 'open' : ''}`}>
                <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT US</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT US</a>
            </nav>
        </div>
    );
}

export default Header;
