import React from 'react';

interface CardViewProps {
    isDarkMode: boolean;
}

const CardView: React.FC<CardViewProps> = ({ isDarkMode }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                backgroundColor: isDarkMode ? '#3a3a3a' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
            }}
        >
            <h3>Card Title</h3>
            <p>Card content goes here.</p>
        </div>
    );
};

export default CardView;
