import React from 'react';
import './App.css';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Purpose from './components/purpose';
import Fundraiser from './components/fundraiser';
import Plan from './components/plan';
import Vision from './components/vision'
import CountOn from './components/countbrian';
import Change from './components/change';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id='landing'>
        <Landing/>
      </div>
      <Fundraiser/>
      <div id='purpose'>
        <Purpose/>
      </div>
      <div id='plan'>
        <Plan/>
      </div>
      <div id='vision'>
        <Vision/>
      </div>
      <CountOn/>
      <Change/>
      <div id='about'>
        <About/>
      </div>
    </div>
  );
}

export default App;
