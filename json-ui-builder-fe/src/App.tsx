import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';
import Header from './components/Header';
import CenterContent from './components/CenterContent';
import SideMenu from './components/SideMenu';
import CardView from './components/CardView';
import { TableView } from './components/TableView';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <Router>
            <div
                style={{
                    backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <div style={{ display: 'flex', flex: 1 }}>
                    <SideMenu isDarkMode={isDarkMode} />
                    {/* <CenterContent isDarkMode={isDarkMode} /> */}
                </div>
                <CardView isDarkMode={isDarkMode} />
                <TableView isDarkMode={isDarkMode} />
                <Footer isDarkMode={isDarkMode} />
                <Switch>
                    {/* Ensure the root path is routed to IndexPage */}
                    <Route path="/" component={IndexPage} />
                    {/* ...existing code for other routes... */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
