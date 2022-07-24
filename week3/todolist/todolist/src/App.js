import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Tasks from './components/Tasks';
import ShowTasks from './components/ShowTasks';

function App() {
  const [taskArr, setTaskArr] = useState([]);
  return (
    <div className="App">
      <Tasks taskArr = {taskArr} setTaskArr = {setTaskArr}/>
      <ShowTasks taskArr = {taskArr} setTaskArr = {setTaskArr}/>


    </div>
  );
}

export default App;
