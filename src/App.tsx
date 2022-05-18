import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './components/data/Data';
import MainPage from './components/home/mainPage';
import Map from './components/map/Map';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/savings-group-map" element={<Map />}></Route>
                <Route path="/savings-group-map/data" element={<Data />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
