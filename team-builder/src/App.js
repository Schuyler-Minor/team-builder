import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  // { name: "", email: "", role: "" }
  const [people, setPeople] = useState([
    {id: 0, name: "Henry", email: "nice@try", role: "TL"},
    {id: 1, name: "Bard", email: "bard@belvins", role: "Dad"},
  ]);

  const addPerson = person => {
    setPeople([...people, {...person, id: Date.now()}]);
  };

  const editPerson = newPerson => {
    const peopleCopy = [...people];
    const oldPerson = peopleCopy.find(person => person.id === newPerson.id);
    Object.assign(oldPerson, newPerson);
    setPeople(peopleCopy);
    // setPeople(people.map(person => {
    //   if (person.id === newPerson.id) {
    //     return newPerson;
    //   } else {
    //     return person;
    //   }
    // }));
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>

      <Route path="/add"
             render={props => <Form {...props}
                                    submitPerson={addPerson}
                                    buttonText="Add Person"
                              />}/>
      <Route exact path="/"
             render={() => people.map(person => <Card person={person}/>)}/>
      <Route path="/edit/:id"
             render={props => <Form {...props}
                                    initialPerson={people.find(person => person.id.toString() === props.match.params.id)}
                                    submitPerson={editPerson}
                                    buttonText="Edit Person"
                              />}
      />
    </div>
  );
}

export default App;
