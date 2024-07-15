import React from 'react';
import './App.css';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Purpose from './components/purpose';
import Fundraiser from './components/fundraiser';
import Plan from './components/plan';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Fundraiser/>
      <Purpose/>
      <Plan/>
    </div>
  );
}

export default App;
