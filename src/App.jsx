import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav.jsx';
import Navigation from './components/User/Sidenav/Navigation.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage.jsx';
import Userpage from './pages/userpage.jsx';
import LoginPage from './pages/login.jsx';
import AboutUs from './pages/tentangkami.jsx';
import RegisterPage from './pages/regist.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Nav /><Home /></>} />
        <Route path="/homepage" element={<><Nav /><Home /></>} />
        <Route path="/userpage" element={<><Navigation /><Userpage /></>} />
        <Route path="/login" element={<><Nav /><LoginPage /></>} />
        <Route path="/aboutus" element={<><Nav /><AboutUs /></>} />
        <Route path="/regist" element={<><Nav /><RegisterPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;
