import React, { useState } from 'react';

const Form = (props) => {
  console.log(props);
  // const setPeople = props.setPeople;
  const { submitPerson, initialPerson, buttonText, history, disabled } = props;
  // const [person, setPerson] = useState({name: "", email: "", role: ""});
  const [person, setPerson] = useState(initialPerson || {name: "", email: "", role: ""});
  const handleChange = event => {
    setPerson({...person, [event.target.name]: event.target.value});
  };
  const handleSubmit = event => {
    event.preventDefault();
    submitPerson(person);
    setPerson({name: "", email: "", role: ""});
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input placeholder="name"
             value={person.name}
             name="name"
             onChange={handleChange}
      />
      </label>
      <label>
      <input placeholder="email"
             value={person.email}
             name="email"
             onChange={handleChange}
      />
      </label>
      <label>
      <input placeholder="role"
             value={person.role}
             name="role"
             onChange={handleChange}
      />
      </label>
      <label>
        <input 
        placeholder='password'
        name='password'
        type='password'
        />
      </label>
      <label>
      <button type="submit" disabled={disabled}>{buttonText}</button>
      </label>
      
    </form>
  );
};

export default Form;
