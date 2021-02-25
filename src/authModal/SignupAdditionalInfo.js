/* eslint-disable no-alert */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal, ModalBody, Button,
} from 'shards-react';
import { closeModal } from './AuthModalSlice';
import constants from '../constants';
import SignupRevieweeForm from './SignupRevieweeForm';
import SignupReviewerForm from './SignupReviewerForm';

import './SignupAdditionalInfo.scss';

const SignupAdditionalInfo = ({ nextStep, appendToSignupData }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.authModalSlice.isOpen);

  const [role, setRole] = useState(constants.REVIEWEE);

  return (
    <Modal
      size="med"
      toggle={() => dispatch(closeModal())}
      centered
      open={isOpen}
    >
      <ModalBody className="signup-modal">
        <div className="signup-roles-container">
          <Button
            active={role === constants.REVIEWEE}
            pill
            outline
            onClick={() => setRole(constants.REVIEWEE)}
          >
            Reviewee
          </Button>
          <Button
            active={role === constants.REVIEWER}
            pill
            outline
            onClick={() => setRole(constants.REVIEWER)}
          >
            Reviewer
          </Button>
        </div>
        <hr />
        {role === constants.REVIEWEE
          ? (
            <SignupRevieweeForm
              appendToSignupData={appendToSignupData}
              nextStep={nextStep}
            />
          ) : (
            <SignupReviewerForm
              appendToSignupData={appendToSignupData}
              nextStep={nextStep}
            />
          )}
      </ModalBody>
    </Modal>
  );
};

export default SignupAdditionalInfo;
