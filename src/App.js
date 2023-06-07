import React from 'react';
import Navbar from './components/Navbar';
import { Home, Services, Courses, Clients, Contact } from './container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Courses />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
