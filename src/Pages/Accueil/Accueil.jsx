import React from 'react';

import homeScreenImg from '../../assets/homeScreen.webp';
import './Accueil.scss'



function Accueil() {
    return(
        <div className='homePage'>
            <img src={homeScreenImg} alt='home_screen' className='homescreen' />
            <h1 className='job_Title'>DÉVELOPPEUR WEB</h1>
        </div>
    )
}

export default Accueil;