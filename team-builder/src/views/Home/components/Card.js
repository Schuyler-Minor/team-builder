import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = (props) => {
  // const person = props.person;
  const { person, deletePerson } = props;
  return (
    <div className="card">
      <div>{person.name}</div>
      <div>{person.email}</div>
      <div>{person.role}</div>
      <div>{person.id}</div>
      <span className="delete"
            onClick={() => deletePerson(person.id)}>
        &times;
      </span>
      <Link to={`/edit/${person.id}`}>Edit</Link>
    </div>
  );
};

export default Card;
