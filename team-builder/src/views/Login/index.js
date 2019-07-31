import React, { useState, useEffect } from 'react';
import axios from 'axios';

// this should be defined in another file and imported
function axiosWithAuth() {
  const token = window.localStorage.getItem('token');
  return axios.create({
    headers: {
      Authorization: token
    }
  });
}

const Login = props => {
  const { history } = props;
  const [user, setUser] = useState({username: "", password: ""});
  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value});
  };
  const handleLogin = event => {
    event.preventDefault();
    axios.post('http://localhost:4001/api/login', user)
      .then(res => {
        const token = res.data.token;
        window.localStorage.setItem('token', token);
      });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axiosWithAuth().get('http://localhost:4001/api/users')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        if (error.response.status === 401) {
          history.push("/login");
        }
      });
  }, []);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text"
               name="username"
               placeholder="username"
               onChange={handleChange}
               value={user.username}/>
        <input type="password"
               name="password"
               placeholder="password"
               onChange={handleChange}
               value={user.password}/>
        <button type="submit">Log In</button>
      </form>
      {JSON.stringify(data)}
    </div>
  );
};

export default Login;
