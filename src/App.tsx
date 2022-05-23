import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './components/data/Data';
import MainPage from './components/home/mainPage';
import Map from './components/map/Map';
import SavingsGroupsdata from './components/data/SavingsCreditData';
import ConsentFormData from './components/data/Data';
import XlsxUpload from './components/data/UploadData';
import SignUp from './components/authentication/signup/SignUp';
import Login from './components/authentication/Login';
import ResetPassword from './components/authentication/ResetPassword';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/savings-group-map" element={<Map />}></Route>
                <Route path="/savings-group-map/data" element={<Data />}></Route>
                <Route path="/SavingData" element={<SavingsGroupsdata />}></Route>
                <Route path="/ConsentForm" element={<ConsentFormData />}></Route>
                <Route path="/UploadData" element={<XlsxUpload />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/reset-password" element={<ResetPassword />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
