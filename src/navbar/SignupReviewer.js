/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { useHistory } from 'react-router-dom';
import GoogleLoginButton from '../Profile/GoogleLoginButton';
import UserService from '../user/userService';

import Uploader from '../common/Uploader';
import constants from '../constants';

function SignUp() {
  const [imageURLs, setImageURLs] = useState([]);
  const [bio, setBio] = useState('');
  const [metSignupReq, setMetSignupReq] = useState(false);
  const history = useHistory();
  // test that it works for signing up
  // clean up onsuccess into a function

  useEffect(() => {
    if (bio && imageURLs.length !== 0) {
      setMetSignupReq(true);
    } else {
      setMetSignupReq(false);
    }
  }, [bio, imageURLs]);

  const onSuccess = (res) => {
    UserService.signUpWithGoogle({
      idToken: res.tokenObj.id_token,
      desiredRole: constants.REVIEWER,
      bio,
      profilePic: imageURLs[0],
    })
      .then((response) => {
        console.log(response);
        const { role, name, profilePic } = response.data;
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
        <FormInput
          id="#bio"
          placeholder="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
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
