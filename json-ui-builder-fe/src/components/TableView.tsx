import React from 'react';

interface TableViewProps {
    isDarkMode: boolean;
}

export const TableView: React.FC<TableViewProps> = ({ isDarkMode }) => {
    return (
        <div
            style={{
                backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '10px',
            }}
        >
            <h2>Table View</h2>
            <p>This is a placeholder for the table view component.</p>
        </div>
    );
};
