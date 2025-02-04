import React from "react";
import "../styles/Projects.css";
import img from "../assets/ezaea.webp"


const projects = [
    { title: "Calendrier", img: img, description: "J'ai tout cassé H24" },
    { title: "Projet Etiquette", img: img, description: "J'ai tout cassé H24" },
    { title: "Calculateur Réseau", img: img, description: "J'ai tout cassé H24" },
    { title: "Blog", img: img, description: "J'ai tout cassé H24" },
    { title: "Guess the Color", img: img, description: "J'ai tout cassé H24" },
    { title: "Générateur de mot de passe", img: img, description: "J'ai tout cassé H24" },
];

export const Projects = () => {
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
