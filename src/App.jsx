import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/custom/Header.jsx';
import Hero from './components/custom/Hero.jsx';
import CreateTrip from './create-trip'; // or './create-trip/index.jsx' (both work)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/create-trip" element={<CreateTrip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
