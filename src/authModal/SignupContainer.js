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

  useEffect(() => {
    // signup when reached end of signup flow
    if (step === STEPS.FINISHED) {
      switch (signupData.type) {
        case 'google':
          UserService.signUpWithGoogle({
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
              history.push('/');
            });
          break;
        case 'email':
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
              history.push('/');
              history.go();
            });
          break;
        default:
          break;
      }
    }
  }, [step]);

  // update data object from every step in the signup flow
  const nextStep = (data) => {
    setSignupData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  switch (step) {
    case STEPS.INITIAL:
      return <Signup nextStep={nextStep} />;
    case STEPS.ADDITIONAL_INFO:
      return <SignupAdditionalInfo nextStep={nextStep} />;
    default:
      return 'processing...';
  }
};

export default SignupContainer;
