import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.webp';
import './Header.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`header ${
                scrolled ? 'scrolled' : ''
            } ${menuOpen ? 'open' : ''}`}
        >

            {/* LOGO */}

            <a
                className="name_signature"
                href="/"
                onClick={closeMenu}
                aria-label="LALA Web Solutions Home"
            >
                <img
                    src={Logo}
                    alt="LALA Web Solutions"
                />
            </a>


            {/* DESKTOP NAVIGATION */}

            <nav className="header_links">

                <a href="#services">
                    SERVICES
                </a>

                <a href="#projects">
                    PROJECTS
                </a>

                <a href="#about">
                    ABOUT
                </a>

                <a href="#contact">
                    CONTACT
                </a>

            </nav>


            {/* CTA */}

            <a
                href="#contact"
                className="header_cta"
            >
                START A PROJECT
                <span>↗</span>
            </a>


            {/* MOBILE MENU BUTTON */}

            <button
                className={`menu_icon ${
                    menuOpen ? 'open' : ''
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={
                    menuOpen
                        ? 'Close navigation menu'
                        : 'Open navigation menu'
                }
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
            </button>


            {/* MOBILE NAVIGATION */}

            <nav
                className={`mobile_menu ${
                    menuOpen ? 'open' : ''
                }`}
            >

                <a
                    href="#services"
                    onClick={closeMenu}
                >
                    <span>01</span>
                    SERVICES
                </a>

                <a
                    href="#projects"
                    onClick={closeMenu}
                >
                    <span>02</span>
                    PROJECTS
                </a>

                <a
                    href="#about"
                    onClick={closeMenu}
                >
                    <span>03</span>
                    ABOUT
                </a>

                <a
                    href="#contact"
                    onClick={closeMenu}
                >
                    <span>04</span>
                    CONTACT
                </a>

                <div className="mobile_menu_footer">
                    LALA WEB SOLUTIONS
                </div>

            </nav>

        </header>
    );
}

export default Header;