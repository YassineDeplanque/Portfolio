import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={`menu-overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

            <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
            </div>

            <ul className={`navbar-ul ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                <NavLink to="/" className="nav-link">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/skills" className="nav-link">
                    <li>Compétences</li>
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                    <li>Projets</li>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <li>À propos</li>
                </NavLink>
            </ul>
        </>
    );
};
