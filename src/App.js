import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Program from './components/Program.js';
import Informasi from './components/Informasi.js';
import Kontak from './components/Kontak.js';
import AboutUs from './components/AboutUs.js'; // Import AboutUs
import Login from './components/Login.js'; 
import Regist from './components/Regist.js'; 

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/regist" element={<Regist />} /> 
      </Routes>
    </Router>
  );
}

export default App;
