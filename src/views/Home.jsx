import React from "react";
import '../styles/Home.css';
import img from '../assets/profilePicture.webp'

export const Home = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <h1 className="home-title">Bienvenue sur mon Portfolio !</h1>
                <h3 className="home-subtitle">
                    Deplanque Yassineeeaaa <strong className="metier">Étudiant en BTS SIO</strong>
                </h3>
            </div>
            <div className="image-container">
                <img className="profile-image" src="https://m.media-amazon.com/images/I/51RXFkMDSyL._AC_UF1000,1000_QL80_.jpg" alt={img} />
            </div>
        </div>
    );
};
