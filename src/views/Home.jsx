import React from "react";
import '../styles/Home.css';
import img from '../assets/profilePicture.webp'

export const Home = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <h1 className="home-title">Bienvenue sur mon Portfolio !</h1>
                <h3 className="home-subtitle">
                    Deplanque Yassine <strong className="metier">Étudiant en BTS SIO</strong>
                </h3>
            </div>
            <div className="image-container">
                <img className="profile-image" src={img} alt={img} />
            </div>
        </div>
    );
};
