import React from 'react';
import Form from '../../components/Form.js';
import api from '../../services/api';

const Add = props => {
  const { history } = props;
  const addPerson = person => {
    // axios.post('http://localhost:4000/api/team-member/', person)
    return api.addTeamMember(person)
      .then(() => history.push("/"));
  };

  return (
    <div>
      <h1>Add Person</h1>
      <Form {...props} buttonText="Add Person" submitPerson={addPerson} />
    </div>
  );
};

export default Add;

