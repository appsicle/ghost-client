import React from 'react';
import { Form } from 'shards-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import GoogleButton from './GoogleButton';
import constants from '../constants';
import config from '../config';

function Login() {
  const history = useHistory();

  // FIXME: redirect is broken. Fix immediately
  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignin`, {
        idToken: res.tokenObj.id_token,
      })
      .then((response) => {
        console.log(response.data);
        const { role, name, profilePic } = response.data;
        localStorage.setItem('name', name);
        localStorage.setItem('profile', profilePic);
        localStorage.setItem('isLoggedIn', true);
        if (role === constants.REVIEWER) {
          history.push('/reviewerDashboard');
        } else if (role === constants.REVIEWEE) {
          history.push('/revieweeDashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        history.push('/');
      });
  };

  return (
    <Form>
      <GoogleButton onSuccess={onSuccess} desiredRole={constants.REVIEWEE} />
    </Form>
  );
}

export default Login;
