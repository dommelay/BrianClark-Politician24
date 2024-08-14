import React, {useState, useEffect } from 'react';
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
import PhotoCarousel from './components/photocarousel';
import Contact from './components/contact';
import Donate from './components/donate';
import Modal from './components/modal';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <div className="App">
      <Navbar/>
      <Modal isOpen={modalIsOpen} onClose={closeModal} />
      <div id='landing'>
        <Landing/>
      </div>
      {/* <Fundraiser/> */}
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
        <PhotoCarousel/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
      <div id='donate'>
        <Donate/>
      </div>
    </div>
  );
}

export default App;
