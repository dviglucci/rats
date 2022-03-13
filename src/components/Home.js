import '../App.css';
import React, { useState } from 'react';
import ratHome from '../rat-home.png';
import logo from '../logo.png';
import InfoBox from './InfoBox.js'

function Home() {
  const [showInfoBox, setInfoBox] = useState(false);

  return (
    <div className="home">
      <header className="home-text">
      <img src={logo} alt='logo' id='logo'/>
        <div>(and pigeons, too)</div>
        <button onClick={() => setInfoBox(true)}>Huh?</button>
      </header>
      <div className='rat-home'>
      <img src={ratHome} alt='rat'/>
      </div>
      {showInfoBox === true ?
        <InfoBox /> : null
      }
    </div>
  );
}

export default Home;
