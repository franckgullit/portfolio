import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Accueil from './Pages/Accueil/Accueil.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
