import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Footer.css';

export const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            // Affiche le footer seulement quand on est au bas de la page
            if (scrollPosition >= pageHeight - 10) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">Mes réseaux</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/yassine-deplanque-59265b34b/" target="_blank" rel="noopener noreferrer">
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
