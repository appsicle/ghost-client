import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import google from '../icons/google.png';
import config from '../config';
import './GoogleButton.css';
import constants from '../constants';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
axios.defaults.withCredentials = true;

function GoogleButton({ desiredRole }) {
  const history = useHistory();

  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignin`, {
        idToken: res.tokenObj.id_token,
        desiredRole,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    localStorage.setItem('isLoggedIn', true);
    if (desiredRole === constants.REVIEWER) {
      history.push('/reviewerDashboard');
    } else if (desiredRole === constants.REVIEWEE) {
      history.push('/revieweeDashboard');
    }
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

export default GoogleButton;
