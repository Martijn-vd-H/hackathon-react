import React from 'react';
import logo from './logo.svg';
import { ExampleClass }  from './example-class';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{margin: "20px"}}>
          Greeting: <ExampleClass greeting="Hello!" />
        </div>
      </header>

    </div>
  );
}

export default App;
