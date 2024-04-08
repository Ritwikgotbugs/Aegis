import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Test from './pages/Test'; // Corrected import statement for Test
import { SearchBar } from './components/searchbar'
import { Aegis } from './components/Aegis'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes> 
            <Route path='/' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/test' exact element={<Test />} /> {/* Corrected route */}
          </Routes>
          <Footer />
        </Router>
      </div>
      <Aegis />
      <SearchBar />
    </>
  )
}

export default App;
