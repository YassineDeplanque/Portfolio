import React, { useState } from "react";
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
        description: "Un calendrier interactif permettant d'ajouter, modifier et supprimer des événements, avec la possibilité d'associer des couleurs selon les catégories d'événements.",
        details: {
            content: "Le calendrier permet aux utilisateurs de planifier et organiser leurs événements avec une interface utilisateur intuitive. Il intègre également des fonctionnalités comme un envoi de mail aux personnes concernées.",
            images: [
                calendar, 
                miniCalendar
            ]
        }
    },
    { 
        title: "Projet Etiquette", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Gestionnaire de contacts permettant d'ajouter, de modifier et de classer des contacts dans différentes catégories. Ce projet offre également la possibilité d'imprimer des étiquettes avec les informations des contacts de différentes catégories.",
        details: {
            content: "Ce projet permet de gérer une liste de contacts, de les organiser par catégorie, et d'imprimer des étiquettes personnalisées pour chaque contact en fonction de sa catégorie.",
            images: [
                etiquette, 
                etiquetteSearch
            ]
        }
    },
    { 
        title: "Calculateur Réseau", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Outil pour aider à calculer des plages d'adresses IP et à déterminer les sous-réseaux d'un réseau donné. Idéal pour les administrateurs système et les professionnels du réseau.",
        details: {
            content: "L'outil permet aux utilisateurs de calculer rapidement les plages d'adresses IP et de déterminer les sous-réseaux d'un réseau donné en fonction de la classe d'adresse IP.",
            images: [
                calculeReseau, 
                calculeResult
            ]
        }
    },
    { 
        title: "Blog", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Un blog simple et élégant où les utilisateurs peuvent publier, commenter et gérer leurs articles. Ce projet utilise des fonctionnalités comme la pagination, l'authentification et la gestion des utilisateurs.",
        details: {
            content: "Ce blog offre une plateforme pour les utilisateurs afin qu'ils puissent créer des articles, interagir avec les commentaires, et gérer leurs comptes et articles personnels.",
            images: [
                aviationSearch, 
                aviationForm
            ]
        }
    },
    { 
        title: "Guess the Color", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Jeu interactif où l'utilisateur doit deviner la couleur en fonction de la valeur rbg donnée. Un moyen amusant d'apprendre les codes de couleur !",
        details: {
            content: "Le jeu permet aux utilisateurs d'apprendre les codes de couleur RGB en essayant de deviner la couleur qui correspond à une valeur donnée.",
            images: [
                guessColor, 
                guessColorRight
            ]
        }
    },
    { 
        title: "Générateur de mot de passe", 
        img: "https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg", 
        description: "Un générateur de mots de passe sécurisés et aléatoires pour protéger les comptes en ligne. L'utilisateur peut choisir la longueur du mot de passe et la complexité souhaitée.",
        details: {
            content: "Cet outil génère des mots de passe aléatoires et sécurisés, avec des options pour ajuster la longueur et la complexité des mots de passe générés.",
            images: [
                cppEx1, 
                cppEx2
            ]
        }
    },
];

export const Projects = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(null);

    const toggleDetails = (index) => {
        setActiveProjectIndex(activeProjectIndex === index ? null : index);
    };

    return (
        <div className="container">
            <h1 className="title">Projets</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.img} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <button className="details-button" onClick={() => toggleDetails(index)}>
                                {activeProjectIndex === index ? "Voir moins" : "Voir plus"}
                            </button>
                            {activeProjectIndex === index && (
                                <div className="project-details">
                                    <p>{project.details.content}</p>
                                    <div className="project-images">
                                        {project.details.images.map((image, idx) => (
                                            <img key={idx} src={image} alt={`Project detail ${idx}`} className="detail-image" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
