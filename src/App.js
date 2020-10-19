import React from 'react';
import PropTypes from 'prop-types';
//import Potato from './potato'; //추가 render를 위해서 불러옴 ./=same directory
// import logo from './logo.svg'; 교육을 위해 지움
// import './App.css'; 교육을 위해 지움


//App.js 자체에서 function 선언 후 component로 사용 가능
const movieList = [
  {
    id :1, // unique key를 위해서 추가
    name : "A",
    picture: "https://images.unsplash.com/photo-1533590929899-fc2f1a8c5168?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    rating : 5.0
  },
  {
    id:2,
    name : "B",
    picture: "https://images.unsplash.com/photo-1584722065553-3ca71026f32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    rating : 4.9
  },
  {
    id:3,
    name : "C",
    picture: "https://images.unsplash.com/photo-1584722065001-ee7f49d903b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    rating : 4.8
  }
]
// props = object(객체 / 부모) = collection of children// name= child
// props 는 component에 넣게 되는 것들.
// 매개변수(parameter) 및 argument는 child만 가능

// function renderMovie(dish){
// return <Movie name={dish.name} picture={dish.picture} />
// }

function Movie({name, picture, rating}) {
  /* argument에 props 후 return 값에 {props.child} 를 지정하거나
  
  */
  return <div>
    <h1>I like {name} </h1>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={name}/>
    
    </div>;
  }

  Movie.propTypes = {
      name: PropTypes.string.isRequired,
      picture : PropTypes.string.isRequired,
      rating : PropTypes.number.isRequired    
      //.isRequired 는 필수적으로 앞의 form으로 있어야된다고 명시함, 없으면 있거나 없거나 둘다 동작함
    };
  
  
function App() {
  return (
    <div className="App">
      {/* 
        JS : map 명령어 = array에서 array를 줌 = map은 배열의 각 item에서 함수를 실행하는 array를 가진 JS 함수이다. 그리고 그 함수의 결과를 갖는 배열을 가져옴
       */}
      
        {movieList.map(dish => (
        <Movie key={dish.id} name={dish.name} picture={dish.picture} rating={dish.rating} />
        ))}
        {/* 
        위처럼 진행하면 unique key를 잃어버림 따라서 id 지정 ==> 리액트 element들은 항상 1개여야함 즉 key를 부가해야함.
        {movieList.map(renderMovie)}
        {console.log(movieList.map(renderMovie))} */}
        
        
        
        
        {/* dish => (
        <Movie name={dish.name} picture={dish.picture} />
        ) 위 처럼 따로 function renderMovie를 안만들어도 됨.
        */}        
        
      
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
    </div>
  );
}

export default App;
