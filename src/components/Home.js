import '../App.css';
import ratIcon from '../rat-icon.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ratIcon} className="App-logo" alt="logo" />
        <p>
          Check out my sweet rat app!
        </p>
        <Link to='/map'>See map</Link>
      </header>
    </div>
  );
}

export default Home;
