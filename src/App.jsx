import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/custom/Header.jsx';
import Hero from './components/custom/Hero.jsx';
import CreateTrip from './create-trip/index.jsx'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/create-trip" element={<CreateTrip />} />
      </Routes>
    </>
  );
}

export default App;
