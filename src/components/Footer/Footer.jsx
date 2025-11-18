import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/Logo.webp';
import './Footer.scss';
import InstaLogo from '../../assets/InstaLogo.webp';
import linkedinLogo from '../../assets/linkedinLogo.jpg';

function Footer() {
    return (
        <footer className='page_footer'>
            <NavLink className='name_signature' to='#about'><img src={Logo} alt='home_screen' className='homescreen' /></NavLink>
            <nav className='footer_links'>
                <a href='https://www.instagram.com/lala_web_solutions/' target='_blank' className='githublink' rel="noreferrer">
                    <img src={InstaLogo} alt='GitHub Profile' />
                </a>
                <a href='https://www.linkedin.com/in/lala-web-solutions-2217b2396/' target='_blank' className='linkedinlink' rel="noreferrer">
                    <img src={linkedinLogo} alt='linkedin Profile' />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;