import axios from 'axios';

const roles = {
  getRole: async () => axios.get('http://localhost:8000/api/user/role'),
};

export default roles;
