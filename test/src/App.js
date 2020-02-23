import React, {useState}  from 'react';
import HooksExample from './HookExample';
import Donut from './Donut';
import logo from './logo.svg';
import './App.css';

function App() {
  const [amount, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HooksExample />
        <Donut amount={amount}/>
        <button onClick={() => setCount(amount+1)} > +</button>
      </header>
    </div>
  );
}

export default App;
