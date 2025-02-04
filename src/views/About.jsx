import React from "react";

import '../styles/About.css';

export const About = () => {
    return (
        <>
        <div className="container">
            <h1 className="title">Informations personnelles</h1>
            <div className="about-container">
                <h2>Parcours scolaire</h2>
                <div className="education">
                <div className="education-item">
                        <h3>Master en jsp koi - Futur</h3>
                        <p>Université : Nom, Ville</p>
                        <p>Spécialité : nom de la spé</p>
                    </div>
                    <div className="education-item">
                        <h3>BTS SIO - 2025</h3>
                        <p>Établissement : Lycée Jean Bart, Dunlerque</p>
                        <p>Spécialité : SLAM (Solutions Logicielles et Applications Métiers) et Maths approfondies</p>
                    </div>
                    <div className="education-item">
                        <h3>Baccalauréat général - 2023</h3>
                        <p>Établissement : Lycée Jean Bart, Dunlerque</p>
                        <p>Spécialité : Mathématiques, Physique-chimie, Maths Expertes, Mention Très Bien</p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <h2>Passions</h2>
                <div className="education">
                    <div className="education-item">
                        <h3>Sports</h3>
                        <p>Par le passé, j'ai pratiqué 13 ans de basket-ball.</p>
                        <p>Aujourd'hui, et depuis 2 ans, je suis fortement impliqué dans la musculation.</p>
                    </div>
                    <div className="education-item">
                        <h3>Cuisine</h3>
                        <p>J'aime beaucoup cusiner des plats divers et variés</p>
                        <p></p>
                    </div>
                    <div className="education-item">
                        <h3>Voyage</h3>
                        <p>J'adore le voyage, et j'envisage d'en faire beaucoup, afin de dévouvrir de nouveaux décors et de nouvelles cultures.</p>
                    </div>
                </div>
            </div>

            <div className="about-container">
                <h2>Ce que j'apprécie dans l'informatique</h2>
                <div className="education">
                    <div className="education-item">
                        <h3>La diversité</h3>
                        <p>L'informatique est un domaine vaste. Ainsi, j'adore en apprendre tous les jours sur ce domaine et découvrir de nouvelles technologies.</p>
                    </div>
                    <div className="education-item">
                        <h3>Résolution de problème</h3>
                        <p>Résoudre les bugs ou d'autres problèmes implique un grand travail de recherche et de réflexion, que j'apprécie beaucoup et qui offre une grande satisfaction en cas de réussite.</p>
                    </div>
                    <div className="education-item">
                        <h3>Apprentissage constant</h3>
                        <p>La technologie évolue à grande vitesse ce qui m'oblige à toujous me tenir au courant et d'en apprendre chaque jour ce qui rend l'acquisition de compétences infini.</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
