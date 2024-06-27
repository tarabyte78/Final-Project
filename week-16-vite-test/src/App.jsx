import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import MovieApp from './components/MovieApp';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<MovieApp />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
