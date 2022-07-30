import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link,useParams} from 'react-router-dom'
import Home from './components/Home';
import NumberWord from './components/NumberWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/:numword" element = {<NumberWord/>}/>
          <Route path = "/:numword/:c1/:c2" element = {<NumberWord/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
