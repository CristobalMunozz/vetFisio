import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPatient from './pages/NewPatient';
import Evaluation from './pages/Evaluation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-patient" element={<NewPatient />} />
        <Route path="/evaluation" element={<Evaluation />} />
      </Routes>
    </Router>
  );
}

export default App;