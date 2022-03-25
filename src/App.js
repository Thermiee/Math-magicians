import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Quotes from './pages/Quotes';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/calculator" caseSensitive={false} element={<Calculator />} />
        <Route path="/quotes" caseSensitive={false} element={<Quotes />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
