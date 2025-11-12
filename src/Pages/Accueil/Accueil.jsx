import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';

import homeScreenImg from '../../assets/homeScreen2.webp';
import './Accueil.scss';

function Accueil() {
       const presentationRef = useRef(null);

useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#about' && presentationRef.current) {
            presentationRef.current.scrollIntoView({ behavior: 'smooth',block: 'start' });
        }
    }, []);


    return (
        <>
            <div className='homePage'>
                <img src={homeScreenImg} alt='home_screen' className='homescreen' />
                <h1 className='job_title'>WELCOME TO LALA WEB DEVELOPERS</h1>
            </div>

            <div className='presentation' id='about'  ref={presentationRef}>
                <h2 className='about_me'>
                    <span>Smart. Creative. Reliable. Your Web Project Partner.</span>
                </h2>

                <p className='aboutme_text'>
                    At LALA Web Developers, we turn ideas into powerful, user-friendly digital experiences. We're a web development agency dedicated to helping businesses, entrepreneurs, and organizations build effective online solutions — from sleek landing pages to full-stack web applications.
                    <br /><br />
                    Founded on a passion for technology, problem-solving, and creative thinking, LALA's Web combines technical expertise with a human touch. We specialize in both front-end and back-end development, ensuring your website or app looks great, performs smoothly, and solves real-world problems.
                    <br /><br />
                    Whether you’re starting from scratch or looking to improve an existing project, we’re here to deliver clean code, clear communication, and custom solutions that fit your goals — not just templates.
                </p>

                <h3>What We Offer:</h3>
                <ul className='offer_list'>
                    <li>Responsive, modern web design</li>
                    <li>Scalable front-end & back-end development</li>
                    <li>Problem-solving through smart digital tools</li>
                    <li>A collaborative, transparent approach from start to finish</li>
                </ul>

                <p className='closing_text'>
                    We're not just building websites.<br />
                    We're building long-term partnerships and digital products that matter.
                    <br /><br />
                    Let’s bring your vision to life — TOGETHER!
                </p>
            </div>

            <ContactForm />
        </>
    );
}

export default Accueil;
