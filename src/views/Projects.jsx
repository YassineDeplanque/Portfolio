import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaJava, FaNodeJs, FaDocker } from 'react-icons/fa'; // Import des icônes
import { SiCplusplus, SiExpress } from "react-icons/si";

import "../styles/Projects.css";
import guessColor from '../assets/guessColor.png'
import guessColorRight from '../assets/guessColorRight.png'
import calculeReseau from '../assets/calculeReseau.png'
import calculeResult from '../assets/calculeResult.png'
import aviationSearch from '../assets/aviationSearch.png'
import aviationForm from '../assets/aviationForm.png'
import cppEx1 from '../assets/cppEx1.png'
import cppEx2 from '../assets/cppEx2.png'
import calendar from '../assets/calendar.png'
import miniCalendar from '../assets/miniCalendar.png'
import etiquette from '../assets/etiquette.png'
import etiquetteSearch from '../assets/etiquetteSearch.png'

const projects = [
    { 
        title: "Calendrier", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Un calendrier interactif permettant d'ajouter, modifier et supprimer des événements, avec la possibilité d'associer des couleurs pour chaque catégorie d'événements.",
        details: {
            content: "Ce calendrier interactif permet aux utilisateurs de planifier, organiser et personnaliser leurs événements avec des couleurs associées. Il comprend également une fonctionnalité d'envoi automatique de mails aux participants. Enfin, il y a une interface administrateur sécurisée qui permet de gérer les catégories de personnes et leurs emails.",
            images: [
                calendar, 
                miniCalendar
            ],
            techIcons: [
                <FaReact size={40} />,
                <FaNodeJs size={40} />,
                <SiExpress size={40} />,
                <FaDocker size={40} />
            ]
        }
    },
    { 
        title: "Projet Etiquette", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Gestionnaire de contacts permettant d'ajouter, modifier, classer et imprimer des étiquettes avec des informations personnalisées pour chaque catégorie.",
        details: {
            content: "Ce gestionnaire de contacts permet d'ajouter, classer et modifier des contacts selon différentes catégories, avec une fonction d'impression d'étiquettes personnalisées adaptées aux besoins. L'objectif principal était en grande partie de pouvoir imprimer des listes entières d'étiquettes pour des personnes provenant de différentes catégories.",
            images: [
                etiquette, 
                etiquetteSearch
            ],
            techIcons: [
                <FaReact size={40} />,
                <FaNodeJs size={40} />,
                <SiExpress size={40} />,
                <FaDocker size={40} />
            ]
        }
    },
    { 
        title: "Calculateur Réseau", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Outil d'aide pour calculer les plages d'adresses IP et déterminer les sous-réseaux d'un réseau. Pratique pour les administrateurs système et réseaux.",
        details: {
            content: "Cet outil permet de calculer les plages d'adresses IP et de déterminer les sous-réseaux d'un réseau en fonction de la classe d'adresse, offrant ainsi une aide précieuse aux administrateurs réseau. J'ai pu créer cette application en trois langages de programmation différents.",
            images: [
                calculeReseau, 
                calculeResult
            ],
            techIcons: [
                <FaPhp size={40} />,
                <FaJsSquare size={40} />,
                <FaJava size={40} />
            ]
        }
    },
    { 
        title: "Blog", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Blog simple permettant aux utilisateurs de publier, commenter et gérer leurs articles. Il offre des fonctionnalités comme la pagination et l'authentification des utilisateurs.",
        details: {
            content: "Ce blog permet aux utilisateurs de créer, gérer et interagir avec leurs articles, en offrant des fonctionnalités comme la gestion des comptes, des articles et des commentaires. Il y a diverses autres fonctions, comme la recherche ou un formulaire de contact avec envoi de mail.",
            images: [
                aviationSearch, 
                aviationForm
            ],
            techIcons: [
                <FaHtml5 size={40} />,
                <FaCss3Alt size={40} />,
                <FaPhp size={40} />
            ]
        }
    },
    { 
        title: "Guess the Color", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Jeu interactif où l'utilisateur doit deviner la couleur en fonction de la valeur RGB donnée, tout en apprenant les codes de couleur de manière ludique et éducative.",
        details: {
            content: "Le jeu permet aux utilisateurs d'apprendre et de tester leurs connaissances sur les codes RGB en devinant la couleur correspondant à une valeur donnée.",
            images: [
                guessColor, 
                guessColorRight
            ],
            techIcons: [
                <FaJsSquare size={40} />
            ]
        }
    },
    { 
        title: "Mot de passe aléatoire", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Générateur de mots de passe sécurisés et aléatoires. L'utilisateur peut personnaliser la longueur et la complexité du mot de passe généré.",
        details: {
            content: "Ce générateur crée des mots de passe sécurisés et aléatoires. L'utilisateur peut ajuster la longueur et la complexité selon ses préférences pour renforcer la sécurité des comptes.",
            images: [
                cppEx1, 
                cppEx2
            ],
            techIcons: [
                <SiCplusplus size={40} />
            ]
        }
    },
];

export const Projects = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(null);
    const [activeImage, setActiveImage] = useState(null); // Nouveau state pour l'image active

    const toggleDetails = (index) => {
        setActiveProjectIndex(activeProjectIndex === index ? null : index);
    };

    const openImage = (image) => {
        setActiveImage(image); // Définit l'image active à afficher
    };

    const closeImage = () => {
        setActiveImage(null); // Ferme l'image en grand
    };

    return (
        <div className="container">
            <h1 className="title">Projets</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.img} alt={project.title} className="project-image"  onClick={() => openImage(project.img)} />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <button className="details-button" onClick={() => toggleDetails(index)}>
                                {activeProjectIndex === index ? "Voir moins" : "Voir plus"}
                            </button>
                            {activeProjectIndex === index && (
                                <div className="project-details">
                                    <p>{project.details.content}</p>
                                    <div className="tech-icons">
                                        {project.details.techIcons.map((icon, idx) => (
                                            <span key={idx} className="tech-icon"  style={{ marginRight: '8px' }}>{icon} </span>
                                        ))}
                                    </div>
                                    <div className="project-images">
                                        {project.details.images.map((image, idx) => (
                                            <img key={idx} src={image} alt={`Project detail ${idx}`} className="detail-image" onClick={() => openImage(image)} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {activeImage && (
                <div className="modal" onClick={closeImage}>
                    <img src={activeImage} alt="Enlarged" className="modal-image" />
                </div>
            )}
        </div>
    );
};
