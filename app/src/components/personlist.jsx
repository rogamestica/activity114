import React, { useState } from 'react';
import Person from './person';

function PersonList() {
  const [persons, setPersons] = useState([]);

  const addPerson = () => {
    setPersons([...persons, { name: '', age: 0 }]);
  };

  const removePerson = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };


  const updatePerson = (index, field, value) => {
    const newPersons = [...persons];
    newPersons[index][field] = value;
    setPersons(newPersons);
  };

  return (
    <div classname="table container">
      <button onClick={addPerson}>Add Person</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={person.name}
                  onChange={(event) => updatePerson(index, 'name', event.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={person.age}
                  onChange={(event) => updatePerson(index, 'age', parseInt(event.target.value))}
                />
              </td>
              <td>
                <button onClick={() => removePerson(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {persons.map((person, index) => (
        <Person key={index} name={person.name} age={person.age} />
      ))}
    </div>
  );
}

export default PersonList;
