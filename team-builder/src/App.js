import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import api from './services/api';

function EditForm(props) {
  const { editPerson, match, buttonText } = props;
  const id = match.params.id;
  const [initialPerson, setInitialPerson] = useState(null);
  useEffect(() => {
    api.getTeamMember(id)
      .then(res => {
        console.log(res);
        setInitialPerson(res.data);
      });
  }, [id]);
  if (initialPerson === null) {
    return <div>loading...</div>;
  }
  return (
    <Form {...props}
          initialPerson={initialPerson}
          submitPerson={editPerson}
          buttonText={buttonText}
    />
  );
}

function App() {
  // { name: "", email: "", role: "" }
  const [people, setPeople] = useState([
    // {id: 0, name: "Henry", email: "nice@try", role: "TL"},
    // {id: 1, name: "Bard", email: "bard@belvins", role: "Dad"},
  ]);

  useEffect(() => {
    // axios.get('http://localhost:4000/api/team-member/')
    api.getTeamMembers()
      .then(res => {
        setPeople(res.data);
      });
  }, []);

  const addPerson = person => {
    // setPeople([...people, {...person, id: Date.now()}]);
    // axios.post('http://localhost:4000/api/team-member/', person)
    api.addTeamMember(person)
      .then(res => {
        setPeople([...people, res.data]);
      });
  };

  const editPerson = newPerson => {
    api.editTeamMember(newPerson.id, newPerson)
      .then(res => {
        const peopleCopy = [...people];
        const oldPerson = peopleCopy.find(person => person.id === newPerson.id);
        Object.assign(oldPerson, newPerson);
        setPeople(peopleCopy);
      });
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
             render={props => <EditForm {...props}
                                        editPerson={editPerson}
                                        buttonText="Edit Person"
                              />}
      />
    </div>
  );
}

export default App;
