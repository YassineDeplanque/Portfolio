import React from 'react';

export const Error = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f4f4f4',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        },
        content: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            width: '100%',
        },
        title: {
            fontSize: '96px',
            fontWeight: 'bold',
            color: '#ff5733',
            margin: '0',
        },
        message: {
            fontSize: '18px',
            margin: '20px 0',
        },
        button: {
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#ff5733',
            border: 'none',
            borderRadius: '5px',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#e14a2b',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>404</h1>
                <p style={styles.message}>Oups ! La page que vous cherchez n'existe pas.</p>
                <a
                    href="/"
                    style={styles.button}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Retour à l'accueil
                </a>
            </div>
        </div>
    );
};
