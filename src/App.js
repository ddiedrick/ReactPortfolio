import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import HomePage from './components/Home';

function App() {
  return (
  <Router>
  <div className="App">
    <Routes>
    
      <Route path="/" element={<HomePage />} />
     
    </Routes>
  </div>
</Router>

);
  
}

export default App;
