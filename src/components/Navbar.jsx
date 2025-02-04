import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {

    return (
        <>
            <ul className="navbar-ul">
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/skills">
                    <li>Compétences</li>
                </NavLink>
                <NavLink to="projects">
                    <li>Projets</li>
                </NavLink>
                <NavLink to="/about">
                    <li>À propos</li>
                </NavLink>



            </ul>
        </>
    )
}