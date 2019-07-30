import React, { useState, useEffect } from 'react';
import Form from '../../components/Form.js';
import api from '../../services/api';

const Edit = props => {
  const { match, history } = props;
  const id = match.params.id;
  const [initialPerson, setInitialPerson] = useState(null);
  useEffect(() => {
    api.getTeamMember(id)
      .then(res => {
        console.log(res);
        setInitialPerson(res.data);
      });
  }, [id]);

  const editPerson = newPerson => {
    api.editTeamMember(newPerson.id, newPerson)
      .then(res => {
        history.push("/");
      });
  };

  if (initialPerson === null) {
    return <div>loading...</div>;
  }
  return (
    <Form {...props}
          initialPerson={initialPerson}
          submitPerson={editPerson}
          buttonText="Edit Person"
    />
  );
};

export default Edit;
