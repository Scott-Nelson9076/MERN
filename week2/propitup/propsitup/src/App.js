import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Scotty"} lastName={"Nelson"} age={32} hColor = {"Dirty Blonde"}/>
        <div>
        <PersonCard firstName={"Sarah"} lastName={"Notz"} age={31} hColor = {"Brown"}/>
        </div>
        <div>
        <PersonCard firstName={"Jack"} lastName={"Ryan"} age={33} hColor = {"Blonde"}/>
        </div>
        <div>
        <PersonCard firstName={"James"} lastName={"Bond"} age={7} hColor = {"?"}/>
        </div>
    </div>

  );
}

export default App;
