import React, { useState } from "react";
import Person from './components/person';

const PersonList = () => {
  const [persons, setPersons] = useState([
    { name: "John", age: 30 },
    { name: "Mary", age: 25 },
    { name: "Alex", age: 40 },
    { name: "Sarah", age: 22 }
  ]);

  const addPerson = () => {
    const newPerson = {
      name: "New Person",
      age: 0
    };
    setPersons([...persons, newPerson]);
  };

  const removePerson = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  return (
    <div>
      <h2>Person List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <Person key={index} name={person.name} age={person.age}>
              <button onClick={() => removePerson(index)}>Remove</button>
            </Person>
          ))}
        </tbody>
      </table>
      <button onClick={addPerson}>Add Person</button>
    </div>
  );
};

export default PersonList;
