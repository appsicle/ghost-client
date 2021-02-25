import { useState } from 'react';
import {
  Form, FormInput, Button,
} from 'shards-react';
import Uploader from '../common/Uploader';
import constants from '../constants';

const SignupRevieweeForm = ({ nextStep, appendToSignupData }) => {
  const [profilePic, setProfilePic] = useState([]);
  const [age, setAge] = useState(null);
  const [ethnicity, setEthnicity] = useState('');
  const [location, setLocation] = useState('');

  return (
    <Form
      className="signup-form"
      onSubmit={(event) => {
        event.preventDefault();
        appendToSignupData({
          profilePic: profilePic[0], desiredRole: constants.REVIEWEE, age, ethnicity, location,
        });
        nextStep();
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

export default SignupRevieweeForm;
