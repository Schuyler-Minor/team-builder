import React, { useState } from 'react';

const Form = (props) => {
  console.log(props);
  const { submitPerson, initialPerson, buttonText, history } = props;
  const [person, setPerson] = useState(initialPerson || { name: "", email: "", role: ""});
  const inputPerson = event => {
    setPerson({...person, [event.target.name]: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    submitPerson(person);
    setPerson({ name: "", email: "", role: ""});
    history.push("/");
  };

  return (
    <form onSubmit={onSubmit}
          style={{display: "flex", flexDirection: "column", maxWidth: "500px", margin: "0 auto"}}>
      <input placeholder="name"
             value={person.name}
             name="name"
             onChange={inputPerson}
      />
      <input placeholder="email"
             value={person.email}
             name="email"
             onChange={inputPerson}
      />
      <input placeholder="role"
             value={person.role}
             name="role"
             onChange={inputPerson}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
