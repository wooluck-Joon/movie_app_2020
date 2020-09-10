import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; 일단 지움
import App from './App';
// import * as serviceWorker from './serviceWorker'; 일단 지움
import Potato from './potato';

ReactDOM.render(
  <React.StrictMode>
    <App />  <Potato /> 
    {/* <App /> = Component=html을 반환하는 함수 
      JS와 HTML의 조합 = JSX (오직 React에만 존재)
    */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister(); 일단 지움
