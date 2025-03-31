import React from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <header
            style={{
                backgroundImage: `url('/header.png')`, // Assuming the image is in the public folder
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
                height: '50px',
            }}
        >
            <h1>Data Matrix</h1>
            {/* <button
                onClick={toggleTheme}
                style={{
                    marginTop: '10px',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    backgroundColor: isDarkMode ? '#555555' : '#007bff',
                    color: '#ffffff',
                }}
            >
                {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button> */}
        </header>
    );
};

export default Header;
