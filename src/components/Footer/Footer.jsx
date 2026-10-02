import React from 'react';
import Logo from '../../assets/Logo.webp';
import './Footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page_footer">

            {/* ================= TOP ================= */}

            <div className="footer_top">

                <a
                    href="#top"
                    className="footer_logo"
                    aria-label="Back to top"
                >
                    <img
                        src={Logo}
                        alt="LALA Web Solutions"
                    />
                </a>

                <div className="footer_cta">

                    <p>
                        HAVE A PROJECT IN MIND?
                    </p>

                    <h2>
                        Let's build
                        <br />
                        something <span>great.</span>
                    </h2>

                    <a
                        href="#contact"
                        className="footer_button"
                    >
                        START A PROJECT
                        <span>↗</span>
                    </a>

                </div>

            </div>


            {/* ================= LINKS ================= */}

            <div className="footer_middle">

                <div className="footer_column">

                    <h3>
                        NAVIGATION
                    </h3>

                    <a href="#about">
                        About
                    </a>

                    <a href="#services">
                        Services
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>


                <div className="footer_column">

                    <h3>
                        SERVICES
                    </h3>

                    <a href="#services">
                        Web Design
                    </a>

                    <a href="#services">
                        Web Development
                    </a>

                    <a href="#services">
                        SEO
                    </a>

                    <a href="#services">
                        Digital Solutions
                    </a>

                </div>


                <div className="footer_column footer_contact">

                    <h3>
                        GET IN TOUCH
                    </h3>

                    <a href="#contact">
                        Contact LALA
                    </a>

                    <a href="#contact">
                        Start a project
                    </a>

                    <p>
                        Web Solutions
                        <br />
                        France
                    </p>

                </div>

            </div>


            {/* ================= BOTTOM ================= */}

            <div className="footer_bottom">

                <p>
                    © {currentYear} LALA WEB SOLUTIONS.
                    ALL RIGHTS RESERVED.
                </p>

                <p className="footer_tagline">
                    SMART. CREATIVE. RELIABLE.
                </p>

            </div>

        </footer>
    );
}

export default Footer;