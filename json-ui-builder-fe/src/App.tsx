import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Ensure the root path is routed to IndexPage */}
                <Route path="/" element={<IndexPage />} />
                {/* ...existing code for other routes... */}
            </Routes>
        </Router>
    );
};

export default App;
