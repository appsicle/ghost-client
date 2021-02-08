import axios from 'axios';
import config from '../config';

const roles = {
  getRole: async () => {
    const x = await axios.get(`${config.apiUrl}/api/user/role`);
    console.log(x);
    return x;
  },
};

export default roles;
