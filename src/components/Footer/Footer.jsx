import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import githubLogo from '../../assets/githubLogo.jpg';
import linkedinLogo from '../../assets/linkedinLogo.jpg';

function Footer() {
    return (
        <footer className='page_footer'>
            <NavLink className='name_signature' to='/'>Franck Gullit</NavLink>
            <nav className='footer_links'>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/https://github.com/franckgullit'>
                    <img src={githubLogo} alt='github_link' className='githublink' />
                </NavLink>
                <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to='/https://github.com/franckgullit'>
                    <img src={linkedinLogo} alt='linkedin_link' className='linkedinlink' />
                </NavLink>



            </nav>
        </footer>
    )
}

export default Footer;