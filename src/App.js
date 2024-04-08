// import logo from './logo.svg';
import './App.css';
// import {Component} from 'react'
// import LearningComponent from './components/learning-examples/LearningComponent'
// import {FifthComponent} from './components/learning-examples/FirstComponent'
// import SecondComponent from './components/learning-examples/SecondComponent'
// import ThirdComponent from './components/learning-examples/ThirdComponent'
// import FourthComponent from './components/learning-examples/FourthComponent'
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      {/* Todo App */}
      {/* <LearningComponent/> */}
      {/* <PlayingWithProps property1="value1" property2="value2"/> */}
      <TodoApp/>
    </div>
  );
}
// propertis are passed as object
// {property1: 'value1', propery2: 'value2'}
// function PlayingWithProps({property1, property2}){
//   // console.log(properties)
//   console.log(property2)
//   console.log(property1)
//   return (
//     <div>Props</div>
//   )
// }

export default App;
