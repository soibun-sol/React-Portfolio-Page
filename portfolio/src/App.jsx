import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      < Header />
      <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      < Footer />
    </Router>
  );
}

export default App;