import React from 'react';
import { GoogleLogin } from 'react-google-login';

import './GoogleButton.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleButton({ onSuccess, disabled = false, buttonText = 'Signin with Google' }) {
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <GoogleLogin
      disabled={disabled}
      buttonText={buttonText}
      onSuccess={onSuccess}
      onFailure={onFailure}
      clientId={clientId}
      accessType="offline"
    />
  );
}

export default GoogleButton;
