import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './pages/contact';
import './App.css';
import '../src/styles/resetStyles.css';
function App() {
  return (
    <div className="content" style={{ minHeight: "100vh", width: "100vw" }}>
    <Router>
      < Header />
      <main className= "style">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      < Footer />
    </Router>
    </div>
  );
}

export default App;