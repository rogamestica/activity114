import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import Counter from './components/counter';
import Person from './components/person';
import PersonList from './components/personlist';




function App() {
  return (
    <div className="App">
      {/* <Greeting name="John" />
      <Greeting name="Mary" />
      <Greeting name="Alex" />
      <Greeting name="Sarah" /> */}
      <Counter />
      <Person name="John" age="30" />
      <Person name="Mary" age="25" />
      <Person name="Alex" age="40" />
      <Person name="Sarah" age="20" />
      < PersonList />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
