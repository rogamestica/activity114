import './App.css';
// import Greeting from './components/greeting';
// import Counter from './components/counter';
import Person from './components/Person';
import PersonList from './components/personlist';




function App() {
  return (
    <div className="App">
      {/* <Greeting name="John" />
      <Greeting name="Mary" />
      <Greeting name="Alex" />
      <Greeting name="Sarah" />

      <Counter /> */}

      < PersonList />

      <Person name="John" age="30" />
     <Person name="Mary" age="25" />
     <Person name="Alex" age="40" />
     <Person name="Sarah" age="20" /> 

    </div>
  );
}

export default App;
