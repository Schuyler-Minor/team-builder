import React  from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Add from './views/Add';
import Home from './views/Home';
import Edit from './views/Edit';
import Login from './views/Login';

function App() {


  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>

      <Route path="/add" component={Add} />
      <Route exact path="/" component={Home} />
      <Route path="/edit/:id" component={Edit} />

      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
