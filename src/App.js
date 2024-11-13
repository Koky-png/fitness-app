import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FitnessPage from './pages/FitnessPage';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
