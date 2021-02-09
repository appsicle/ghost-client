/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import GoogleButton from './GoogleButton';

import Uploader from '../home/Uploader';
import constants from '../constants';
import config from '../config';

function SignUp() {
  const [imageURLs, setImageURLs] = useState([]);
  const [bio, setBio] = useState(undefined);
  const history = useHistory();
  // test that it works for signing up
  // clean up onsuccess into a function

  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignup`, {
        idToken: res.tokenObj.id_token,
        desiredRole: constants.REVIEWER,
      })
      .then((response) => {
        console.log(response);
        const { role } = response.data;
        localStorage.setItem('isLoggedIn', true);
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
        <label htmlFor="#bio">Bio</label>
        <FormInput id="#bio" placeholder="bio" />
      </FormGroup>
      <Uploader imageBucket="reviewerProfilePic" setImageURLs={setImageURLs} />
      <GoogleButton onSuccess={onSuccess} desiredRole={constants.REVIEWER} />
    </Form>
  );
}

export default SignUp;
