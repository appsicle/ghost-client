import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { googleIcon } from '../icons/links';

import './GoogleButton.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleButton({ onSuccess }) {
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
        <img src={googleIcon} alt="googlelogin" className="icon" />
      </button>
    </div>
  );
}

export default GoogleButton;
