import React, { lazy, useState } from 'react';
import '../src/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FooterLine from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <FooterLine/>
    </BrowserRouter>
  );
};

export default App;
