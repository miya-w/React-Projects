import React from 'react';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import Product from './Products/product';

import About from './About/about';
import Home from './Home/home';
import Contact from './Contact/contact';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        {' | '}
        <NavLink to="/about">About</NavLink>
        {' | '}
        <NavLink to="/contact">Contact</NavLink>
        {' | '}
        <NavLink to="Product">Product</NavLink>
      </nav>

      <Routes>
        <Route path="*" element={<p>page not exist</p>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
