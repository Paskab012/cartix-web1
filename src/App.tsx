import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/home/mainPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
