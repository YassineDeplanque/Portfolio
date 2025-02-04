import React from "react";
import "../styles/Projects.css";
import img from "../assets/ezaea.webp"


const projects = [
    { title: "Calendrier", img: img, description: "Description" },
    { title: "Projet Etiquette", img: img, description: "Description" },
    { title: "Calculateur Réseau", img: img, description: "Description" },
    { title: "Blog", img: img, description: "Description" },
    { title: "Guess the Color", img: img, description: "Description" },
    { title: "Générateur de mot de passe", img: img, description: "Description" },
];

export const Projects = () => {
    return (
        <div className="container">
            <h1 className="title">Projets</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src="https://www.weodeo.com/wp-content/uploads/2021/12/reseau-informatique-scaled-1.jpeg" alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
