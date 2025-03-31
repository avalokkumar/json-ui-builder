import React, { useState } from 'react';

const CenterContent: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Manage isDarkMode state
    const [jsonInput, setJsonInput] = useState('');

    const handleJsonInputChange = (value: string) => {
        setJsonInput(value); // Update JSON input without auto-beautifying
    };

    const beautifyJson = () => {
        try {
            const beautifiedJson = JSON.stringify(JSON.parse(jsonInput), null, 4); // Beautify JSON
            setJsonInput(beautifiedJson);
        } catch (error) {
            alert('Invalid JSON. Please correct it before beautifying.');
        }
    };

    return (
        <div
            className="center-content"
            style={{
                backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '20px',
                width: '95%', // Ensure full width
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                marginTop: '10px',
                marginLeft: '10px'
            }}
            onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
        >
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)} // Toggle isDarkMode
                    style={{
                        padding: '8px 12px',
                        backgroundColor: isDarkMode ? '#ffffff' : '#2c2c2c',
                        color: isDarkMode ? '#000000' : '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Toggle Dark Mode
                </button>
                <button
                    onClick={beautifyJson} // Beautify JSON
                    style={{
                        padding: '8px 12px',
                        backgroundColor: isDarkMode ? '#ffffff' : '#2c2c2c',
                        color: isDarkMode ? '#000000' : '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Beautify JSON
                </button>
            </div>
            <main style={{ flex: 1 }}>
                <textarea
                    value={jsonInput}
                    onChange={(e) => handleJsonInputChange(e.target.value)} // Handle input change
                    placeholder="Enter your JSON here..."
                    style={{
                        width: '95%',
                        height: 'calc(1.2em * 40)',
                        overflowY: 'auto',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        padding: '15px',
                        marginTop: '10px',
                        border: '2px solid #ccc',
                        borderRadius: '8px',
                        backgroundColor: isDarkMode ? '#3a3a3a' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseOut={(e) => {
                        (e.target as HTMLElement).style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }}
                />
            </main>
        </div>
    );
};

export default CenterContent;
