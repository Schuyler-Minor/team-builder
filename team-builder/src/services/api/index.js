import axios from 'axios';

let apiUrl;

if (process.env.REACT_APP_ENVIRONMENT === "development") {
  apiUrl = 'http://localhost:4000/api';
} else {
  apiUrl = 'this should be a heroku link';
}

export function getTeamMembers() {
  return axios.get(`${apiUrl}/team-member`);
}

export function getTeamMember(id) {
  return axios.get(`${apiUrl}/team-member/${id}`);
  // return new Promise((resolve, reject) => {
  //   resolve({data: {name: "Mock Person", email: "Mock Email", role: "Mock", id: 999}});
  // });
}

export function deleteTeamMember(id) {
  return axios.delete(`${apiUrl}/team-member/${id}`);
}

export function addTeamMember(person) {
  return axios.post(`${apiUrl}/team-member`, person);
}

export function editTeamMember(id, person) {
  return axios.put(`${apiUrl}/team-member/${id}`, person);
}

const api = {
  // getTeamMembers: getTeamMembers,
  getTeamMembers,
  getTeamMember,
  addTeamMember,
  editTeamMember,
  deleteTeamMember
};

export default api;
