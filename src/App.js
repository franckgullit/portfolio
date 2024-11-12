import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Accueil from './Pages/Accueil/Accueil.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import CV from './Pages/CV/CV.jsx';


function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/CV' element={<CV />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
