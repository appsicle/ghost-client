import React from 'react';
import { Form } from 'shards-react';
import { useHistory } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import constants from '../constants';
import UserService from '../user/userService';

function Login() {
  const history = useHistory();

  const onSuccess = (res) => {
    UserService.loginWithGoogle({ idToken: res.tokenObj.id_token })
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
      <GoogleLoginButton onSuccess={onSuccess} />
    </Form>
  );
}

export default Login;
