import Typewriter from "typewriter-effect";
import '../styles/Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <h1 className="home-title">
                    <Typewriter
                        options={{
                            strings: ["Bienvenue sur mon Portfolio !", "Découvrez mes compétences et mes projets !"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <h3 className="home-subtitle">
                    Deplanque Yassine <strong className="metier">Étudiant en cycle ingénieur à Polytech Lille.</strong>
                </h3>
            </div>
        </div>
    );
};
