import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage.jsx';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/homepage' element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
