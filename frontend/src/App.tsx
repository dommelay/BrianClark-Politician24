import React from 'react';
import './App.css';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Purpose from './components/purpose';
import Fundraiser from './components/fundraiser';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Fundraiser/>
    </div>
  );
}

export default App;
