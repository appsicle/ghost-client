/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { closeModal } from './AuthModalSlice';
import Signup from './Signup';
import SignupAdditionalInfo from './SignupAdditionalInfo';
import UserService from '../user/userService';
import constants from '../constants';

const STEPS = Object.freeze({
  INITIAL: 1,
  ADDITIONAL_INFO: 2,
  FINISHED: 3,
});

const SignupContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({});
  const [step, setStep] = useState(STEPS.INITIAL);

  const signUpWithGoogle = () => {
    UserService.signUpWithGoogle({
      ...signupData,
    })
      .then((response) => {
        dispatch(closeModal());
        console.log(response);
        const { role } = response.data;
        if (role === constants.REVIEWER) {
          history.push('/reviewerDashboard'); // Bug: wont refresh if already on page
        } else if (role === constants.REVIEWEE) {
          history.push('/revieweeDashboard'); // Bug: wont refresh if already on page
        }
      })
      .catch((err) => {
        console.log(err);
        setStep(STEPS.INITIAL);
      });
  };

  const signUpWithEmail = () => {
    UserService.signUpWithEmail({
      ...signupData,
    })
      .then((response) => {
        dispatch(closeModal());
        console.log(response);
        const { role } = response.data;
        if (role === constants.REVIEWER) {
          history.push('/reviewerDashboard');
        } else if (role === constants.REVIEWEE) {
          history.push('/revieweeDashboard');
        }
      })
      .catch((err) => {
        console.log(err);
        setStep(STEPS.INITIAL);
      });
  };

  useEffect(() => {
    // signup when reached end of signup flow
    if (step === STEPS.FINISHED) {
      switch (signupData.type) {
        case 'google':
          signUpWithGoogle();
          break;
        case 'email':
          signUpWithEmail();
          break;
        default:
          break;
      }
    }
  }, [step]);

  // TODO: how to handle errors
  switch (step) {
    case STEPS.INITIAL:
      return (
        <Signup
          appendToSignupData={(data) => setSignupData((prev) => ({ ...prev, ...data }))}
          nextStep={() => setStep((prev) => prev + 1)}
        />
      );
    case STEPS.ADDITIONAL_INFO:
      return (
        <SignupAdditionalInfo
          appendToSignupData={(data) => setSignupData((prev) => ({ ...prev, ...data }))}
          nextStep={() => setStep((prev) => prev + 1)}
        />
      );
    default:
      return 'processing...';
  }
};

export default SignupContainer;
