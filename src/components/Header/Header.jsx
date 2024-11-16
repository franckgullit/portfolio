import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`header ${menuOpen ? 'open' : ''}`}>
            <NavLink className='name_signature' to='/'>Franck Gullit</NavLink>
            <div className='menu_icon' onClick={toggleMenu}>
                <i className={`fa-solid fa-bars ${menuOpen ? 'open' : ''}`}></i> 
            </div>
            <nav className={`header_links ${menuOpen ? 'active' : ''}`}>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/'>ACCUEIL</NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/Portfolio'>PORTFOLIO</NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/CV'>MON CV</NavLink>
            </nav>
        </div>
    );
}

export default Header;
