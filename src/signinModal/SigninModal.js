/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormInput,
  Button,
} from 'shards-react';
import { closeSigninModal } from './signInModalSlice';
import GoogleLoginButton from '../navbar/GoogleLoginButton';
import UserService from '../user/userService';
import constants from '../constants';

function App() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.signinModalReducer.isOpen);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const signInWithGoogle = (res) => {
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

  // TODO: its redirecting to localhost:3000/? on failure, idk why, not supposed to
  const signInWithEmail = (_email, _password) => {
    console.log(_email, _password);
    UserService.login({ email: _email, password: _password })
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  // Cleanup
  useEffect(
    () => () => {
      dispatch(closeSigninModal());
    },
    [],
  );

  return (
    <Modal
      className="login-modal"
      size="sm"
      toggle={() => dispatch(closeSigninModal())}
      centered
      open={open}
    >
      <ModalHeader>Login</ModalHeader>
      <GoogleLoginButton onSuccess={signInWithGoogle} />
      or
      <ModalBody>
        <Form onSubmit={() => signInWithEmail(email, password)}>
          <FormInput
            id="#email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            id="#password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log in</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}

export default App;

// onclick, send user to signup component
