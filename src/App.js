import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact';
import Experience from './components/Experience';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Zhihao Wang Portfolio Site";
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experience" element={<Experience />} />
      </Route>
        
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
