import React from 'react';

interface SideMenuProps {
    isDarkMode: boolean;
}

const menuItems = [
    { label: 'Table View', key: 'table' },
    { label: 'Card View', key: 'card' },
    { label: 'Timeline View', key: 'timeline' },
    { label: 'Grid View', key: 'grid' },
    { label: 'Charts & Graph View', key: 'cgraph' },
];

const SideMenu: React.FC<SideMenuProps> = ({ isDarkMode }) => {
    return (
        <div
            className="side-menu"
            style={{
                backgroundColor: isDarkMode ? '#1a1a1a' : '#55667D',
                color: isDarkMode ? '#ffffff' : '#000000',
                padding: '15px',
                width: '300px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                marginTop: '10px',
            }}
        >
            <aside>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {menuItems.map((item) => (
                        <li
                            key={item.key}
                            style={{
                                padding: '12px 16px',
                                margin: '8px 0',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                backgroundColor: isDarkMode ? '#4a4a4a' : '#ffffff',
                                color: isDarkMode ? '#ffffff' : '#333',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = isDarkMode
                                    ? '#5a5a5a'
                                    : '#f0f0f0';
                            }}
                            onMouseOut={(e) => {
                                (e.target as HTMLElement).style.backgroundColor = isDarkMode
                                    ? '#4a4a4a'
                                    : '#ffffff';
                            }}
                            onClick={() => console.log(`Selected: ${item.label}`)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default SideMenu;
