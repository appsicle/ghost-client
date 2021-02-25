import { useState } from 'react';
import {
  Form, FormInput, Button,
} from 'shards-react';
import Uploader from '../common/Uploader';
import constants from '../constants';

const SignupReviewerForm = ({ nextStep, appendToSignupData }) => {
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState([]);

  return (
    <Form
      className="signup-form"
      onSubmit={(event) => {
        event.preventDefault();
        appendToSignupData({ profilePic: profilePic[0], desiredRole: constants.REVIEWER, bio });
        nextStep();
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

export default SignupReviewerForm;
