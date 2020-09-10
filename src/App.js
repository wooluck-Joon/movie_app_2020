import React from 'react';
//import Potato from './potato'; //추가 render를 위해서 불러옴 ./=same directory
// import logo from './logo.svg'; 교육을 위해 지움
// import './App.css'; 교육을 위해 지움


//App.js 자체에서 function 선언 후 component로 사용 가능
function Movie(props) {
/* argument에 props 후 return 값에 {props.child} 를 지정하거나

*/
return <h1>I like {props.name}</h1>;
        
}
// props = object(객체 / 부모) = collection of children// name= child
// props 는 component에 넣게 되는 것들.
// 매개변수(parameter) 및 argument는 child만 가능
function App() {
  return (
    <div className="App">
      <h1># Movie App 2020_09_10</h1>
      <Movie />
      <Movie name="DWAR"/>
      <Movie name="jesus"/>
      <Movie name="bando"/>
      <Movie name="asdkfj"/>
      <Movie name="uququqnqu"/>
      {/* <Movie Kmovie="DWAR"
             something={true} 
             other={["hello",1,2,3,4,5,]}/> */}

      {/* HTML 에서는 <div class="ddddd"></div> 이런 식으로 속성을 쓰지만
          JSX에서는 name이라는 이름의 속성 작성=prop name을 부여함
          그리고 다시 Movie Component로 정보를 보냄
          Kmovie 라는 이름의 property를 kimchi라는 value로 부여함.
          또한 prop 이름은 임의로 지정 가능
          value는 string, boolean, array 등 모두 사용 가능
       */}
       
      
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
