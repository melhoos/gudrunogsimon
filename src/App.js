import React from 'react';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import HeadPicture from './HeadPicture';
import Program from './Program';
import Travel from './Travel';
import Information from './Information';
import Reply from './Reply';
import Contact from './Contact';
import Map from './Map';
import Intro from './Intro';

function App() {
  return (
    <div id="App">
      <Header/>
      <main>
        <Menu/>
        <HeadPicture/>
        <Intro/>
        <Program/>
        <Travel/>
        <Information/>
        <Reply/>
        <Contact/>
        <Map/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
