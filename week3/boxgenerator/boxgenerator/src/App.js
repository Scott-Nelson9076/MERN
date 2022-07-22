import logo from './logo.svg';
import './App.css';
import Generator from './components/Generator';
import Boxes from './components/Boxes';
import React, {useState} from 'react';

function App() {
  const [boxArr,setBoxArr] = useState([]);
  return (
    <div className="App">
      <Generator boxArr = {boxArr} setBoxArr = {setBoxArr}/>
      <Boxes boxArr={boxArr}/>
      <hr />
    </div>
  );
}

export default App;
