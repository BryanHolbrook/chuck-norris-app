import logo from './logo.svg';
import './App.css';

import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Stay Tuned for Chuck Norris Facts!
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Chuck_Norris"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Chuck Norris
        </a>
      </header>
    </div>
  );
}

export default App;
