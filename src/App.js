import React from 'react';
import Navbar from './components/Navbar';
import { Home, Services, Courses, Clients } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <Clients />
    </div>
  );
}

export default App;
