import React from 'react';

import homeScreenImg from '../../assets/homeScreen.webp';
import './Accueil.scss'



function Accueil() {
    return(
        <div>
        <div className='homePage'>
            <img src={homeScreenImg} alt='home_screen' className='homescreen' />
            <h1 className='job_Title'>DÉVELOPPEUR WEB</h1>
        </div>
        <div className='presentation'>
                <h2 className='about_me'>HI I'M FRANCK</h2>
                <p className='aboutme_text'>Je suis un développeur web débutant qui a envie de découvrir et de devenir une partie intégrante du monde de la programmation. <br></br>Après des années de travail dans des secteurs où l'attention aux détails, la résolution de problèmes et la gestion de projets étaient essentielles, je me suis tourné vers le développement web pour canaliser ma passion pour la technologie et la créativité.
                <br></br>Grâce à l'apprentissage pratique et à l'auto-apprentissage, j'ai acquis une maîtrise des technologies front-end et back-end.
                <br></br>Mon objectif est de créer des applications web conviviales et efficaces qui résolvent des problèmes du monde réel. Je suis bien conscient des défis que cela implique, mais je suis prêt et disposé à les affronter et à continuer à apprendre de mes difficultés.
                <br></br>Avec une base solide en pensée analytique et en collaboration d'équipe, je suis ravi d'apporter une perspective unique au monde du développement web. <br></br>Connectons-nous !</p>
            </div>
        </div>
    )
}

export default Accueil;