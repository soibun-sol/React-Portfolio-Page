import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Footer from './components/footer'
import './App.css'
import './styles/resetStyles.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}


export default App
