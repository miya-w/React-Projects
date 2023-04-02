import React from 'react';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import Product from './Products/product';
import About from './About/about';
import Home from './Home/home';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="*" element={<p>page not exist</p>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
