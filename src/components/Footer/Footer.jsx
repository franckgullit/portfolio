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
                <a href='https://github.com/franckgullit' target='_blank' className='githublink' rel="noreferrer">
                    <img src={githubLogo} alt='GitHub Profile' />
                </a>
                <a href='https://www.linkedin.com/in/franck-g-3595ab13a/' target='_blank' className='linkedinlink' rel="noreferrer">
                    <img src={linkedinLogo} alt='linkedin Profile' />
                </a>
            </nav>
        </footer>
    )
}

export default Footer;