// src/App.jsx

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
import Pembayaran from './pages/Pembayaran.jsx';
import Anggota from './components/User/Anggota/data_anggota.jsx';

import Anggota from './components/User/Anggota/data_anggota.jsx';
import Anggota from './components/User/Anggota/data_anggota.jsx';
import Program from './pages/program.jsx';



import KonfirmasiPembayaran from './pages/KonfirmasiPembayaran';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Nav /><Home /></>} />
        <Route path='/homepage' element={<><Nav /><Home /></>} />
        <Route path='/userpage' element={<><Navigation /><Userpage /></>} />
        <Route path='/login' element={<><Nav /><LoginPage /></>} />
        <Route path='/aboutus' element={<><Nav /><AboutUs /></>} />
        <Route path='/regist' element={<><Nav /><RegisterPage /></>} />
        <Route path='/Pembayaran' element={<><Pembayaran /></>} />
        <Route path='/data_anggota' element={<><Navigation /><Anggota /></>} />
        <Route path="/konfirmasi-pembayaran" element={<KonfirmasiPembayaran />} />
        <Route path='/data_anggota' element={<><Navigation /><Anggota /></>} />
        <Route path='/data_anggota' element={<><Navigation /><Anggota /></>} />
        <Route path='/program' element={<><Navigation /><Program /></>} />
      </Routes>
    </Router> 
  );
}

export default App;