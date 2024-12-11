import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage.jsx';
import Userpage from './pages/userpage.jsx';
import LoginPage from './pages/login.jsx';
import AboutUs from './pages/tentangkami.jsx';
import RegisterPage from './pages/regist.jsx';
import Pembayaran from './pages/Pembayaran.jsx';


function App() {
  return (
    <Router>
      {window.location.pathname !== '/userpage' && <Nav />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/userpage' element={<Userpage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/regist' element={<RegisterPage />} />
        <Route path='/Pembayaran' element={<Pembayaran />} />
      </Routes>

    </Router>
  );
}

export default App;
