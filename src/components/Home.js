import '../App.css';
import { Link } from 'react-router-dom';
import ratHome from '../rat-home.png';
import logo from '../logo.png';

function Home() {
  return (
    <div className="home">
      <header className="home-text">
      <img src={logo} alt='logo' id='logo'/>
        <div>(and pigeons, too)</div>
        <Link to='/map'>See map</Link>
      </header>
      <div className='skyscrapers'>
        <div id='s1'></div>
      </div>
      <img src={ratHome} alt='rat' id='rat-home'/>
    </div>
  );
}

export default Home;
