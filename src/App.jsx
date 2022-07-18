import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Data from './components/data/Data';
import MainPage from './components/home/mainPage';
import Map from './components/map/Map';
import AdminMap from './components/managementUI/map/AdminMap';
import SavingsGroupsdata from './components/data/SavingsCreditData';
import ConsentFormData from './components/data/Data';
import XlsxUpload from './components/uploadFiles/UploadData';
import SignUp from './components/authentication/signup/SignUp';
import Login from './components/authentication/singin/Login';
import ResetPassword from './components/authentication/resetPassword/ResetPassword';
// import Activate from './components/authentication/resetPassword/Activate';
import ConfirmResetPass from './components/authentication/resetPassword/ConfirmResetPass';
import Layout from './components/helpers/Layout';
import LoginOTP from './components/authentication/singin/loginOtp';
import { ToastContainer } from 'react-toastify';
import ManagementData from './components/managementUI/admindata/ManagementData';
import NgosManagement from './components/managementUI/admindata/NgosManagement';

const App = () => {
    return (
        <Router>
            <Layout>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route exact path="/savings-group-map" element={<Map />}></Route>
                    <Route exact path="/savings-group-map/data" element={<Data />}></Route>
                    <Route path="/SavingData" element={<SavingsGroupsdata />}></Route>
                    <Route path="/ConsentForm" element={<ConsentFormData />}></Route>
                    <Route path="/UploadData" element={<XlsxUpload />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/reset-password" element={<ResetPassword />}></Route>
                    <Route
                        path="/password/reset/confirm/:uid/:token"
                        element={<ConfirmResetPass />}
                    ></Route>
                    <Route path="/activate" element={<LoginOTP />}></Route>
                    <Route exact path="/savings-group-map/admin" element={<AdminMap />}></Route>
                    <Route
                        exact
                        path="/savings-group-map/admin/management"
                        element={<ManagementData />}
                    ></Route>
                    <Route exact path="/savings-group-map/admin/management/data" element={<NgosManagement />}></Route>
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
