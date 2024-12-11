import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage.jsx';
import Userpage from './pages/userpage.jsx';


function App() {
  return (
    <Router>
      {window.location.pathname !== '/userpage' && <Nav />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/homepage' element={<Home />} />
        <Route path='/userpage' element={<Userpage />} />
      </Routes>

    </Router>
  );
}

export default App;
