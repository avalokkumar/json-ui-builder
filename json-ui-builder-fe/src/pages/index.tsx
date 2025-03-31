import React from 'react';
import Header from '../components/Header';
import { TableView } from '../components/TableView'; // Changed named import
import SideMenu from '../components/SideMenu';
import Footer from '../components/Footer';
import CenterContent from '../components/CenterContent';

const IndexPage: React.FC = () => {
    React.useEffect(() => {
        document.documentElement.style.height = '100%';
        document.body.style.height = '100%';
        document.body.style.margin = '0';
    }, []);

    return (
        <div style={
                { 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', // Full viewport height
                    backgroundColor: '#2c2c2c',
                }
            }>
            <Header isDarkMode={false} toggleTheme={() => { console.log('Theme toggled'); }} />
            <div style={{ display: 'flex', flex: 1 }}>
                <SideMenu isDarkMode={false} />
                <main style={{ flex: 1, padding: '10px' }}> {/* Adjusted flex and added padding */}
                    <CenterContent />
                </main>
            </div>
            <Footer isDarkMode={false} />
        </div>
    );
};

export default IndexPage;