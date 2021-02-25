/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import {
  Modal, ModalBody, Form, FormInput, Button,
} from 'shards-react';
import { closeModal, switchToSignin } from './AuthModalSlice';

import './Signup.scss';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Signup = ({ nextStep, appendToSignupData }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.authModalSlice.isOpen);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  return (
    <Modal
      size="sm"
      toggle={() => dispatch(closeModal())}
      centered
      open={isOpen}
    >
      <ModalBody className="signup-modal">
        <GoogleLogin
          buttonText="Sign up with Google"
          onSuccess={(res) => {
            // TODO: validate if there is already a google account
            appendToSignupData({ idToken: res.tokenObj.id_token, type: 'google' });
            nextStep();
          }}
          onFailure={(err) => {
            // TODO: add better warning for failure
            console.error(err);
          }}
          clientId={clientId}
          accessType="offline"
        />
        {' '}
        <p className="signup-or">or</p>
        <Form
          className="signup-form"
          onSubmit={(event) => {
            event.preventDefault();
            // TODO: add validation before calling nextStep
            appendToSignupData({
              email, password, type: 'email', name,
            });
            nextStep();
          }}
        >
          <FormInput
            className="signup-field"
            id="#name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            className="signup-field"
            id="#email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="signup-field"
            id="#password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            className="signup-field"
            id="#password-confirmation"
            placeholder="password confirmation"
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
          />
          <Button
            className="signup-submit"
            type="submit"
          >
            Sign up
          </Button>
          <span style={{ fontSize: '14px' }}>
            Have account?
            {' '}
            <a
              href="#"
              onClick={() => dispatch(switchToSignin())}
            >
              Log in here
            </a>
          </span>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Signup;
