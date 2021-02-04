import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';
import { Modal, ModalBody, ModalHeader } from 'shards-react';
import { toggleModal, closeModal } from './loginSlice';
import refreshTokenSetup from '../utils/refreshToken';
import google from '../icons/google.png';

import './Login.css';

const clientId = window.env.GOOGLE_CLIENT_ID;

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.loginModalReducer.isOpen);

  const toggle = () => {
    dispatch(toggleModal());
  };

  const close = () => {
    dispatch(closeModal());
  };

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);

    close();

    // query for user's role
    if (true) {
      // TODO: run this if and only if user doesn't already have a role.
      history.push('/role');
    }
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    close();
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <Modal
      className="login-modal"
      size="sm"
      toggle={toggle}
      centered
      open={open}
    >
      <ModalHeader>Log in to save your data!</ModalHeader>
      <ModalBody>
        <p>We do not store any of your data</p>
        <div className="login-form-container">
          <button type="button" onClick={signIn} className="icon-button">
            <img src={google} alt="google login" className="icon" />
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default Login;
