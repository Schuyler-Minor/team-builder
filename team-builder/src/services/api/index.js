import axios from 'axios';

const apiUrl = 'http://localhost:4000/api';

export function getTeamMembers() {
  return axios.get(`${apiUrl}/team-member`);
}

export function getTeamMember(id) {
  return axios.get(`${apiUrl}/team-member/${id}`);
}

export function addTeamMember(person) {
  return axios.post(`${apiUrl}/team-member`, person);
}

export function editTeamMember(id, person) {
  return axios.put(`${apiUrl}/team-member/${id}`, person);
}

const api = {
  getTeamMembers,
  getTeamMember,
  addTeamMember,
  editTeamMember
};

export default api;
