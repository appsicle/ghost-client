import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import google from '../icons/google.png';
import config from '../config';
import './GoogleButton.css';
import userService from '../user/userService';
import { setUserRole } from '../user/userSlice';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
axios.defaults.withCredentials = true;

function Login({ desiredRole }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignin`, {
        idToken: res.tokenObj.id_token,
        desiredRole,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    const retrieveRole = async () => {
      const retrievedRole = await userService.getRole();
      dispatch(setUserRole(retrievedRole.data));
      localStorage.setItem('userRole', retrievedRole.data);
    };

    retrieveRole();
    history.push('/');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <div className="login-form-container">
      <button type="button" onClick={signIn} className="icon-button">
        <img src={google} alt="google login" className="icon" />
      </button>
    </div>
  );
}

export default Login;
