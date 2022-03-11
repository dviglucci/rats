import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Check out my sweet rat app!
        </p>
        <Link to='/map'>See map</Link>
      </header>
    </div>
  );
}

export default Home;
