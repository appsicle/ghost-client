import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';
import { Modal, ModalBody, ModalHeader } from 'shards-react';
import axios from 'axios';
import { toggleModal, closeModal } from './loginSlice';
import google from '../icons/google.png';

import './Login.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
axios.defaults.withCredentials = true;

function Login() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.loginModalReducer.isOpen);

  const toggle = () => {
    dispatch(toggleModal());
  };

  const close = () => {
    dispatch(closeModal());
  };

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.tokenObj);

    axios
      .post('http://localhost:8000/api/auth/googleSignin', {
        idToken: res.tokenObj.id_token,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
