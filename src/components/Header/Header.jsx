import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';


function Header() {
    return (
        <div className='header'>
            <NavLink className='name_signature' to='/'>Franck Gullit</NavLink>
            <nav className='header_links'>
            <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')}  to='/'>ACCUEIL</NavLink>
            <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/Portfolio'>PORTFOLIO</NavLink>
            <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/CV'>MON CV</NavLink>
            </nav>
        </div>
    )
}

export default Header;