import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';

import heroImg1 from '../../assets/heroImg1.webp';
import heroImg2 from '../../assets/heroImg2.webp';
import heroImg3 from '../../assets/heroImg3.webp';
import heroImg4 from '../../assets/heroImg4.webp';
import './Accueil.scss';

const heroSlides = [
    {
        title: 'WE BUILD DIGITAL EXPERIENCES THAT WORK.',
        subtitle:
            'Modern websites and digital solutions designed around your goals.',
        image: heroImg1,
    },
    {
        title: 'YOUR IDEA, OUR EXPERTISE.',
        subtitle:
            'From concept to launch, we turn your vision into a reliable digital product.',
        image: heroImg2,
    },
    {
        title: 'BUILT TO GROW WITH YOU.',
        subtitle:
            'Fast, responsive and scalable websites designed for real-world businesses.',
        image: heroImg3,
    },
    {
        title: 'SMART, CREATIVE, RELIABLE.',
        subtitle:
            'Technology should solve problems — not create them.',
        image: heroImg4,
    },
];

const services = [
    {
        number: '01',
        title: 'Web Design',
        text: 'Modern, responsive interfaces designed to represent your brand and give your visitors a great experience.',
    },
    {
        number: '02',
        title: 'Web Development',
        text: 'Fast, scalable front-end and back-end solutions built around the specific needs of your business.',
    },
    {
        number: '03',
        title: 'SEO',
        text: 'Practical SEO strategies designed to improve your visibility and help the right people find your business.',
    },
    {
        number: '04',
        title: 'Digital Solutions',
        text: 'Custom digital tools and integrations that solve real problems and make your business more efficient.',
    },
];

const reasons = [
    {
        number: '01',
        title: 'Personal Approach',
        text: 'Every project gets individual attention. We take time to understand your goals before building.',
    },
    {
        number: '02',
        title: 'Built Around You',
        text: 'We do not believe in forcing every business into the same template.',
    },
    {
        number: '03',
        title: 'Performance Matters',
        text: 'Good design means little if your website is slow, difficult to use or difficult to find.',
    },
    {
        number: '04',
        title: 'Long-Term Thinking',
        text: 'We build solutions that can evolve as your business grows.',
    },
];

function Accueil() {
    const presentationRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [countsStarted, setCountsStarted] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;

        if (hash === '#about' && presentationRef.current) {
            presentationRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    // Hero slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((previous) =>
                previous === heroSlides.length - 1 ? 0 : previous + 1
            );
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    // Start statistics animation when section enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCountsStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        const statsSection = document.querySelector('.stats');

        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main>

            {/* ================= HERO ================= */}

            <section className="hero">

                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.title}
                        className={`hero_slide ${
                            index === currentSlide ? 'active' : ''
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt="LALA Web Solutions"
                            className="hero_image"
                        />

                        <div className="hero_overlay"></div>

                        <div className="hero_content">

                            <p className="hero_label">
                                LALA WEB SOLUTIONS
                            </p>

                            <h1>{slide.title}</h1>

                            <p className="hero_subtitle">
                                {slide.subtitle}
                            </p>

                            <div className="hero_buttons">
                                <a
                                    href="#contact"
                                    className="primary_button"
                                >
                                    START A PROJECT
                                    <span>→</span>
                                </a>

                                <a
                                    href="#services"
                                    className="secondary_button"
                                >
                                    EXPLORE SERVICES
                                </a>
                            </div>

                        </div>
                    </div>
                ))}

                <div className="hero_navigation">

                    <button
                        onClick={() =>
                            setCurrentSlide(
                                currentSlide === 0
                                    ? heroSlides.length - 1
                                    : currentSlide - 1
                            )
                        }
                        aria-label="Previous slide"
                    >
                        ←
                    </button>

                    <div className="slide_counter">
                        <span>
                            {String(currentSlide + 1).padStart(2, '0')}
                        </span>
                        <span className="counter_line"></span>
                        <span>
                            {String(heroSlides.length).padStart(2, '0')}
                        </span>
                    </div>

                    <button
                        onClick={() =>
                            setCurrentSlide(
                                currentSlide === heroSlides.length - 1
                                    ? 0
                                    : currentSlide + 1
                            )
                        }
                        aria-label="Next slide"
                    >
                        →
                    </button>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section
                className="presentation"
                id="about"
                ref={presentationRef}
            >

                <div className="section_label">
                    <span>01</span>
                    ABOUT LALA WEB SOLUTIONS
                </div>

                <div className="intro_grid">

                    <div>
                        <h2 className="about_title">
                            Smart. Creative.
                            <br />
                            <span>Reliable.</span>
                        </h2>
                    </div>

                    <div className="about_content">

                        <p className="lead">
                            Your web project deserves more than a template.
                        </p>

                        <p>
                            At LALA Web Solutions, we turn ideas into
                            powerful, user-friendly digital experiences.
                            We help businesses, entrepreneurs and
                            organizations build effective online solutions —
                            from sleek landing pages to full-stack web
                            applications.
                        </p>

                        <p>
                            We combine technical expertise with creative
                            thinking and a human approach. Whether you're
                            starting from scratch or improving an existing
                            project, we focus on clean code, clear
                            communication and solutions built around your
                            actual goals.
                        </p>

                        <a
                            href="#contact"
                            className="text_link"
                        >
                            LET'S WORK TOGETHER →
                        </a>

                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section
                className="services"
                id="services"
            >

                <div className="section_label">
                    <span>02</span>
                    WHAT WE DO
                </div>

                <div className="section_heading">
                    <h2>
                        Digital solutions
                        <br />
                        <span>built with purpose.</span>
                    </h2>

                    <p>
                        From your first idea to a finished product,
                        we create digital experiences designed to
                        work for your business.
                    </p>
                </div>

                <div className="services_grid">

                    {services.map((service) => (
                        <article
                            className="service_card"
                            key={service.number}
                        >
                            <span className="service_number">
                                {service.number}
                            </span>

                            <div>
                                <h3>{service.title}</h3>

                                <p>
                                    {service.text}
                                </p>

                                <span className="card_arrow">
                                    ↗
                                </span>
                            </div>
                        </article>
                    ))}

                </div>

            </section>


            {/* ================= PROJECTS ================= */}

            <section className="projects" id="projects">

                <div className="section_label">
                    <span>03</span>
                    SELECTED WORK
                </div>

                <div className="section_heading projects_heading">

                    <h2>
                        Work we're
                        <br />
                        <span>proud of.</span>
                    </h2>

                    <p>
                        Real projects. Real solutions. A growing portfolio
                        of websites and digital work delivered for clients.
                    </p>

                </div>

                <div className="projects_grid">

                    <article className="project_card project_dark">

                        <div className="project_top">
                            <span>PROJECT 01</span>
                            <span>WEB DEVELOPMENT</span>
                        </div>

                        <div className="project_mockup">
                            <div className="browser_bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="mockup_content">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="project_info">
                            <h3>Client Website</h3>
                            <p>
                                Custom website design and development.
                            </p>
                            <a href="#contact">
                                VIEW PROJECT →
                            </a>
                        </div>

                    </article>


                    <article className="project_card project_light">

                        <div className="project_top">
                            <span>PROJECT 02</span>
                            <span>WEB DEVELOPMENT</span>
                        </div>

                        <div className="project_mockup">
                            <div className="browser_bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="mockup_content">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className="project_info">
                            <h3>Client Website</h3>
                            <p>
                                Responsive website and digital experience.
                            </p>
                            <a href="#contact">
                                VIEW PROJECT →
                            </a>
                        </div>

                    </article>

                </div>

            </section>


            {/* ================= WHY LALA ================= */}

            <section className="why_lala">

                <div className="section_label">
                    <span>04</span>
                    WHY US?
                </div>

                <div className="why_grid">

                    <div>
                        <h2>
                            Small enough
                            <br />
                            <span>to care.</span>
                        </h2>

                        <p className="why_intro">
                            We believe great digital products come from
                            understanding people, not just technology.
                        </p>
                    </div>

                    <div className="reasons">

                        {reasons.map((reason) => (
                            <div
                                className="reason"
                                key={reason.number}
                            >
                                <span>
                                    {reason.number}
                                </span>

                                <div>
                                    <h3>
                                        {reason.title}
                                    </h3>

                                    <p>
                                        {reason.text}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* ================= INSIGHTS ================= */}

            <section className="insights">

                <div className="section_label">
                    <span>05</span>
                    DIGITAL INSIGHTS
                </div>

                <div className="insights_heading">

                    <h2>
                        What's happening
                        <br />
                        <span>in digital.</span>
                    </h2>

                    <p>
                        Web development, SEO and technology insights.
                    </p>

                </div>

                <div className="insights_placeholder">

                    <div>
                        <span>COMING SOON</span>

                        <h3>
                            LALA Digital Insights
                        </h3>

                        <p>
                            We're preparing a collection of useful
                            articles, web trends and SEO insights.
                        </p>
                    </div>

                    <span className="insights_arrow">
                        ↗
                    </span>

                </div>

            </section>


            {/* ================= CONTACT ================= */}

            <section
                className="contact_section"
                id="contact"
            >

                <div className="contact_intro">

                    <div className="section_label">
                        <span>06</span>
                        GET IN TOUCH
                    </div>

                    <h2>
                        Have a project
                        <br />
                        <span>in mind?</span>
                    </h2>

                    <p>
                        Tell us what you're working on.
                        Let's see how we can bring it to life.
                    </p>

                </div>

                <ContactForm />

            </section>


            {/* ================= STATS ================= */}

            <section className="stats">

                <div className="stats_header">
                    <span>THE NUMBERS</span>
                    <p>
                        Every project is a step forward.
                    </p>
                </div>

                <div className="stats_grid">

                    <div className="stat">
                        <strong>
                            {countsStarted ? '05' : '00'}
                        </strong>
                        <span>Websites Delivered</span>
                    </div>

                    <div className="stat">
                        <strong>
                            {countsStarted ? '03' : '00'}
                        </strong>
                        <span>SEO Projects</span>
                    </div>

                    <div className="stat">
                        <strong>
                            {countsStarted ? '05+' : '00'}
                        </strong>
                        <span>Client Engagements</span>
                    </div>

                    <div className="stat">
                        <strong>
                            01
                        </strong>
                        <span>Growing Studio</span>
                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="final_cta">

                <p>
                    READY WHEN YOU ARE.
                </p>

                <h2>
                    Let's build
                    <br />
                    something <span>great.</span>
                </h2>

                <a
                    href="#contact"
                    className="primary_button"
                >
                    START A PROJECT →
                </a>

            </section>

        </main>
    );
}

export default Accueil;