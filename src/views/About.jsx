import React from "react";
import '../styles/About.css';
import { FaGraduationCap, FaBasketballBall, FaUtensils, FaPlane, FaTools, FaLaptopCode, FaUserFriends } from 'react-icons/fa';

export const About = () => {
    return (
        <>
        <div className="container">
            <h1 className="title">Informations personnelles</h1>

            <div className="about-container">
                <h2>Parcours scolaire</h2>
                <div className="education">
                    <div className="education-item">
                    <FaGraduationCap className="icon"/>
                        <h3>Ingénieur  informatique - Futur</h3>
                        <p>Établissement : Inconnu à l'heure actuelle</p>
                        <p>Spécialité : Inconnue à l'heure actuelle</p>
                    </div>
                    <div className="education-item">
                    <FaGraduationCap className="icon"/>
                        <h3>BTS SIO - 2025</h3>
                        <p>Établissement : Lycée Jean Bart, Dunkerque</p>
                        <p>Spécialité : SLAM (Solutions Logicielles et Applications Métiers) et Maths approfondies</p>
                    </div>
                    <div className="education-item">
                    <FaGraduationCap className="icon"/>
                        <h3>Baccalauréat général - 2023</h3>
                        <p>Établissement : Lycée Jean Bart, Dunkerque</p>
                        <p>Spécialité : Mathématiques, Physique-chimie, Maths Expertes, Mention Très Bien</p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <h2>Passions</h2>
                <div className="passions">
                    <div className="passion-item">
                        <FaBasketballBall size={50} className="passion-icon" />
                        <h3>Sports</h3>
                        <p>Par le passé, j'ai pratiqué 13 ans de basket-ball. Aujourd'hui, je suis passionné par la musculation.</p>
                    </div>
                    <div className="passion-item">
                        <FaUtensils size={50} className="passion-icon" />
                        <h3>Cuisine</h3>
                        <p>J'aime cuisiner une variété de plats, en expérimentant différentes cuisines du monde.</p>
                    </div>
                    <div className="passion-item">
                        <FaPlane size={50} className="passion-icon" />
                        <h3>Voyage</h3>
                        <p>J'adore voyager pour découvrir de nouveaux paysages et cultures à travers le monde.</p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <h2>Ce que j'apprécie dans l'informatique</h2>
                <div className="education">
                    <div className="education-item">
                    <FaTools className="icon"/>
                        <h3>La diversité</h3>
                        <p>L'informatique est un domaine vaste et stimulant. Chaque jour, j'en apprends davantage et découvre des technologies passionnantes.</p>
                    </div>
                    <div className="education-item">
                    <FaTools className="icon"/>
                        <h3>Résolution de problèmes</h3>
                        <p>J'apprécie résoudre des bugs ou des problèmes complexes, un processus qui demande une réflexion et des recherches approfondies.</p>
                    </div>
                    <div className="education-item">
                    <FaTools className="icon"/>
                        <h3>Apprentissage constant</h3>
                        <p>Le domaine évolue rapidement, me permettant de continuer à apprendre et d'améliorer mes compétences tous les jours.</p>
                    </div>
                </div>

                <div className="about-container">
                <h2>Expériences</h2>
                <div className="education">
                    <div className="education-item">
                    <FaLaptopCode className="icon"/>
                        <h3>Stage DevOps</h3>
                        <p>10 semaines de stage à la mairie de ma ville durant lesquelles j'ai pu développer deux applications web fullstack avec React et les déployer avec Docker.</p>
                    </div>
                    <div className="education-item">
                    <FaUserFriends className="icon"/>
                        <h3>Animateur</h3>
                        <p>Durant deux ans et demi, j'ai accompagné des adolescents et des enfants dans les centres de loisirs de ma ville durant les vacances scolaires. J'ai pu améliorer mon travail en équipe et mon art oratoire.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};
