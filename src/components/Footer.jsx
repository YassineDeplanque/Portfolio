import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">Mes réseaux</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="footer-icon" />
                    </a>
                    <a href="https://github.com/YassineDeplanque" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="footer-git" />
                    </a>
                </div>
            </div>
            <p className="footer-copy">&copy; 2025 Deplanque Yassine - Tous droits réservés</p>
        </footer>
    );
};
