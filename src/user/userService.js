import axios from 'axios';
import config from '../config';

const getProfile = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${config.apiUrl}/api/user/getProfile`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const logout = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${config.apiUrl}/api/auth/logout`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const loginWithGoogle = (body) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignin`, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const signUpWithGoogle = (body) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignUp`, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const login = (body) =>
  new Promise((resolve, reject) => {
    axios
      .post(`${config.apiUrl}/api/auth/signin`, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export default {
  getProfile,
  logout,
  loginWithGoogle,
  signUpWithGoogle,
  login,
};
