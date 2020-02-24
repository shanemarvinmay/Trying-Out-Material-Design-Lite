import React, {useState}  from 'react';
import HooksExample from './HookExample';
import Donut from './Donut';
import logo from './logo.svg';
import water_icon from './water_icon.png';
import './App.css';

function App() {
  const [amount, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={water_icon} width="150vw"/>
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <HooksExample /> */}
        <Donut amount={amount} />
        {/* <button onClick={() => setCount(amount+1)} > +</button> */}
        <input type="number" onKeyPress={(event) => {
          var code = event.keyCode || event.which;
          if(code === 13) { //13 is the enter keycode
              setCount(amount + parseFloat(event.target.value));
              event.target.value = '';
          }  
        }} style={{margin:"10px",padding:"10px;"}}/>
      </header>
    </div>
  );
}

export default App;
