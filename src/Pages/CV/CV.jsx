import React from 'react';
import './CV.scss';


function CVPage() {
    return (
        <div className='cv_page'>
            <header>
                <h1>Franck Gullit NGANG</h1>
                <p>Email: frankiegullit@mail.com | Phone: +33 75 333 0896</p>
            </header>

            <section className='profile_summary'>
                <h2>Résumé</h2>
                <p>
                    Développeur web débutant motivé et travailleur, ayant suivi une formation intensive sur les technologies de développement web. Passionné par la création d'applications web réactives et centrées sur l'utilisateur, en mettant l'accent sur un code propre et des pratiques de conception efficaces. Démontre un fort engagement envers l'apprentissage et l'adaptabilité, désireux d'appliquer des compétences fondamentales en JavaScript, React, HTML et CSS à des projets concrets. Reconnu pour son souci du détail, sa capacité de collaboration et sa capacité à résoudre des problèmes dans des environnements en évolution rapide. Prêt à contribuer à des équipes dynamiques et à continuer à développer une expertise technique grâce à des expériences pratiques.
                </p>
            </section>

            <section className='technical_skills'>
                <h2>Compétences</h2>
                <ul>
                    <li>Langages : JavaScript, HTML, CSS, SCSS</li>
                    <li>Frameworks/Bibliothèques : React, Node.js</li>
                    <li>Other: SEO optimization,Debugging</li>
                </ul>
            </section>

            <section className='professional_experience'>
                <h2>Expérience professionnelle</h2>
                <div className='job'>
                    <h3>Intérimaire</h3>
                    <p>ADECCO | Strasbourg | 01/2022 – 03/2024</p>
                </div>
                <div className='job'>
                    <h3>Agent SSIAP 1</h3>
                    <p>ANTEVOL | Strasbourg | 12/2019 – 01/2022</p>
                </div>
                <div className='job'>
                    <h3>HSE Officer</h3>
                    <p>Habtoor Leighton Group | Doha | 03/2017 – 10/2017</p>
                </div>
                <div className='job'>
                    <h3>HSE Officer</h3>
                    <p>Rabban Stefanutti Stocks | Doha | 06/2014 – 12/2016</p>
                </div>
                <div className='job'>
                    <h3>HSE Officer</h3>
                    <p>Hamad Bin Mohammed Contracting Company | Doha | 04/2013 – 05/2014</p>
                </div>
            </section>

            <section className='education'>
                <h2>Éducation</h2>
                <div className='education_entry'>
                    <h3>RNCP II Developpeur WEB</h3>
                    <p>OpenClassRooms | Strasbourg | 2024</p>
                </div>
                <div className='education_entry'>
                    <h3>SSIAP 1</h3>
                    <p>AFPA | Strasbourg | 2019</p>
                </div>
                <div className='education_entry'>
                    <h3>NEBOSH IGC</h3>
                    <p>Safety Skills Ltd | Doha | 2014</p>
                </div>
                <div className='education_entry'>
                    <h3>BSc. Environlental Science</h3>
                    <p>University of Buea | Buea | 2011</p>
                </div>
            </section>

            <section className='langues'>
                <h2>Langues</h2>
                    <ul>
                        <li>Anglais – Langue maternelle</li>
                        <li>Français – Maîtrise</li>
                    </ul>
            </section>

            <footer>
                <p>Consultez mon GitHub ou connectez-vous avec moi sur LinkedIn pour en savoir plus!</p>
            </footer>
        </div>
    );
}

export default CVPage;
