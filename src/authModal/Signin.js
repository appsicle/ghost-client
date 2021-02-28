/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Modal, ModalBody, Form, FormInput, Button,
} from 'shards-react';
import { GoogleLogin } from 'react-google-login';
import { closeModal, switchToSignup } from './AuthModalSlice';

import UserService from '../services/UserService';
import constants from '../constants';

import './Signin.scss';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Signin = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.authModalSlice.isOpen);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const signInWithGoogle = (res) => {
    UserService.loginWithGoogle({ idToken: res.tokenObj.id_token })
      .then((response) => {
        dispatch(closeModal());
        console.log(response.data);
        const { role } = response.data;
        // TODO: potentialy merge to just /dashboard and conditionally render the correct component
        if (role === constants.REVIEWER) {
          history.push('/reviewerDashboard');
        } else if (role === constants.REVIEWEE) {
          history.push('/revieweeDashboard');
        }
      })
      .catch((err) => {
        dispatch(closeModal());
        console.log(err);
        history.push('/');
      });
  };

  const signInWithEmail = (_email, _password) => {
    console.log(_email, _password);
    UserService.login({ email: _email, password: _password })
      .then((res) => {
        dispatch(closeModal());
        alert(res);
      })
      .catch((err) => {
        dispatch(closeModal());
        alert(err);
      });
  };

  return (
    <Modal
      size="sm"
      toggle={() => dispatch(closeModal())}
      centered
      open={isOpen}
    >
      <ModalBody className="signin-modal">
        <GoogleLogin
          buttonText="Sign in with Google"
          onSuccess={signInWithGoogle}
          onFailure={() => alert('google failure')}
          clientId={clientId}
          accessType="offline"
        />
        <p className="signin-or">or</p>
        <Form
          className="signin-form"
          onSubmit={(event) => {
            event.preventDefault();
            signInWithEmail(email, password);
          }}
        >
          <FormInput
            className="signin-field"
            id="#email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="signin-field"
            id="#password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="signin-submit"
            type="submit"
          >
            Log in
          </Button>
          <span style={{ fontSize: '14px' }}>
            First time?
            {' '}
            <a
              href="#"
              onClick={() => dispatch(switchToSignup())}
            >
              Create an account
            </a>
          </span>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Signin;
