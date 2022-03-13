import '../App.css';
import React, { useState } from 'react';
import ratHome from '../rat-home.png';
import logo from '../logo.png';
import InfoBox from './InfoBox.js';
import skyline from '../skyline.png';
import pizza from '../pizza.png';

function Home() {
  const [showInfoBox, setInfoBox] = useState(false);

  return (
    <div className="home">
      <header className="home-text">
      <img src={logo} alt='logo' id='logo'/>
        <div>(and pigeons, too)</div>
        <button id='button-home' onClick={() => setInfoBox(true)}>Huh?</button>
      </header>
      <img src={ratHome} alt='rat' id='rat'/>
      <img src={skyline} alt='skyline' id='skyline'/>
      <img src={pizza} alt='pizza' id='pizza-2'/>
      {showInfoBox === true ?
        <InfoBox /> : null
      }
    </div>
  );
}

export default Home;
