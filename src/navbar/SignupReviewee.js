import React, { useState, useEffect } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { useHistory } from 'react-router-dom';
import GoogleLoginButton from '../Profile/GoogleLoginButton';
import UserService from '../user/userService';

import Uploader from '../common/Uploader';
import constants from '../constants';

function SignUp() {
  const history = useHistory();
  const [imageURLs, setImageURLs] = useState([]);
  const [age, setAge] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [location, setLocation] = useState('');
  const [metSignupReq, setMetSignupReq] = useState(false);

  useEffect(() => {
    if (age && ethnicity && location && imageURLs.length !== 0) {
      setMetSignupReq(true);
    } else {
      setMetSignupReq(false);
    }
  }, [age, ethnicity, location, imageURLs]);

  const onSuccess = (res) => {
    UserService.signUpWithGoogle({
      idToken: res.tokenObj.id_token,
      desiredRole: constants.REVIEWEE,
      age,
      ethnicity,
      location,
      profilePic: imageURLs[0],
    })
      .then((response) => {
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
  };

  return (
    <Form>
      <FormGroup>
        <label htmlFor="#age">Age</label>
        <FormInput
          id="#age"
          placeholder="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="#ethnicity">Ethnicity</label>
        <FormInput
          id="#ethnicity"
          placeholder="ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
        />
        <label htmlFor="#location">Location</label>
        <FormInput
          id="#location"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormGroup>
      <Uploader
        imageBucket="reviewerProfilePic"
        setImageURLs={setImageURLs}
        maxFiles={1}
      />
      <GoogleLoginButton onSuccess={onSuccess} disabled={!metSignupReq} />
    </Form>
  );
}

export default SignUp;
