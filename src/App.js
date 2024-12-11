// src/App.js

import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home.js';
import Pembayaran from './pages/Pembayaran.jsx';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
      </Routes>
    </Router>
  );
}


export default App;
