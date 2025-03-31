import React from 'react';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <footer
            style={{
                backgroundColor: isDarkMode ? '#3a3a3a' : '#f8f9fa',
                padding: '10px',
                textAlign: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
            }}
        >
            <p>Footer</p>
        </footer>
    );
};

export default Footer;
