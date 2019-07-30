import React, { useState, useEffect } from 'react';
import Card from './components/Card.js';
import api from '../../services/api';

const Home = props => {
  const [people, setPeople] = useState([]);

  const updatePeople = () => {
    api.getTeamMembers()
      .then(res => {
        setPeople(res.data);
      });
  };

  useEffect(() => {
    // axios.get('http://localhost:4000/api/team-member/')
    console.log("first home render");
    updatePeople();
  }, []);

  const deletePerson = id => {
    return api.deleteTeamMember(id)
      .then(() => updatePeople());
  };

  // if (!people) {
  //   return <div>Loading....</div>;
  // }

  return (
    <div>
      <h1>People</h1>
      {people.map(person => <Card key={person.id} person={person} deletePerson={deletePerson} />)}
    </div>
  );
};

export default Home;
