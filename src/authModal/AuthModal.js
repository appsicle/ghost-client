/* eslint-disable no-alert */
import { useSelector } from 'react-redux';
import Signin from './Signin';
import SignupContainer from './SignupContainer';

const AuthModal = () => {
  const isOpen = useSelector((state) => state.authModalSlice.isOpen);
  const isSignIn = useSelector((state) => state.authModalSlice.isSignIn);

  return isOpen && (isSignIn ? <Signin /> : <SignupContainer />);
};

export default AuthModal;
