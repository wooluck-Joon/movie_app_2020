import React from 'react';
import Potato from './potato'; //추가 render를 위해서 불러옴 ./=same directory
// import logo from './logo.svg'; 교육을 위해 지움
// import './App.css'; 교육을 위해 지움

function App() {
  return (
    <div className="App">
      <h1>REACT LET'S GET IT</h1>
      <Potato />
      {/* Potato.js를 index.js에 바로 포함시킬 수도 있고 App.js에 포함할 수도 있음 */}
     
      {/* 교육을 위해 지움
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
      </header> 
      */}
    </div>
  );
}

export default App;
