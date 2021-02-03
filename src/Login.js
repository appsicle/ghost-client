import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';
import { Modal, ModalBody, ModalHeader } from 'shards-react';
import { toggleModal } from './loginSlice';
import refreshTokenSetup from './utils/refreshToken';
import google from './icons/google.png';

import './Login.css';

const clientId = '100793784258-j2f842an55244esrq79ifbpns55kmb38.apps.googleusercontent.com';
function Login() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.loginModalReducer.isOpen);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
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

  const toggle = () => {
    dispatch(toggleModal());
  };

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
