import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Scott" lastName = "Nelson" age = {32} hairColor = "Blonde"/>
      <div>
        <PersonCard firstName = "Sarah" lastName = "Notz" age = {31} hairColor = "Brown"/>
      </div>
      <div>
        <PersonCard firstName = "Sylvie" lastName = "Nelson" age = {32} hairColor = "Dirty Blonde"/>
      </div>
      <div>
      <PersonCard firstName = "Turbo" lastName = "Bunny" age = {5} hairColor = "White and Grey"/>
      </div>

    </div>
  );
}

export default App;
