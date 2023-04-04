import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import Counter from './components/counter';
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
     
      <Person/>

      < PersonList />

    </div>
  );
}

export default App;
