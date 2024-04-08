import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import { Aegis } from './components/Aegis';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/test' element={<Test />} /> 
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App;
