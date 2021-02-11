import axios from 'axios';
import config from '../config';

const getRole = async () => axios.get(`${config.apiUrl}/api/user/role`);

const logout = async () => axios.get(`${config.apiUrl}/api/auth/logout`);

export default { getRole, logout };
