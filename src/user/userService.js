import axios from 'axios';
import config from '../config';

const roles = {
  getRole: async () => axios.get(`${config.apiUrl}/api/user/role`),
};

export default roles;
