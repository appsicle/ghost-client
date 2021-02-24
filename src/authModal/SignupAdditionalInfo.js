/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal, ModalBody, Form, FormInput, Button,
} from 'shards-react';
import Uploader from '../common/Uploader';
import { closeModal } from './AuthModalSlice';
import constants from '../constants';

import './SignupAdditionalInfo.scss';

// TODO: move to another file
const ReviewerForm = ({ nextStep }) => {
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState([]);

  return (
    <Form
      className="signup-form"
      onSubmit={(event) => {
        nextStep({ profilePic: profilePic[0], desiredRole: constants.REVIEWER, bio });
        event.preventDefault();
      }}
    >
      <FormInput
        className="signup-field"
        id="#bio"
        placeholder="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Uploader
        imageBucket="reviewerProfilePic"
        setImageURLs={setProfilePic}
        maxFiles={1}
      />
      <Button
        className="signup-submit"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

// TODO: move to another file
const RevieweeForm = ({ nextStep }) => {
  const [profilePic, setProfilePic] = useState([]);
  const [age, setAge] = useState(null);
  const [ethnicity, setEthnicity] = useState('');
  const [location, setLocation] = useState('');

  return (
    <Form
      className="signup-form"
      onSubmit={(event) => {
        nextStep({
          profilePic: profilePic[0], desiredRole: constants.REVIEWEE, age, ethnicity, location,
        });
        event.preventDefault();
      }}
    >
      <FormInput
        className="signup-field"
        id="#age"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormInput
        className="signup-field"
        id="#ethnicity"
        placeholder="ethnicity"
        value={ethnicity}
        onChange={(e) => setEthnicity(e.target.value)}
      />
      <FormInput
        className="signup-field"
        id="#location"
        placeholder="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Uploader
        imageBucket="reviewerProfilePic"
        setImageURLs={setProfilePic}
        maxFiles={1}
      />
      <Button
        className="signup-submit"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

const SignupAdditionalInfo = ({ nextStep }) => {
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
          ? <ReviewerForm nextStep={nextStep} /> : <RevieweeForm nextStep={nextStep} />}
      </ModalBody>
    </Modal>
  );
};

export default SignupAdditionalInfo;
