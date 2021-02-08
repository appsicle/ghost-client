/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { useDispatch } from 'react-redux';
import Login from './GoogleButton';
import { closeModal } from './roleSelectionModalSlice';
import Uploader from '../home/Uploader';
import constants from '../constants';

function SignUp() {
  const [imageURLs, setImageURLs] = useState([]);
  const [bio, setBio] = useState(undefined);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeModal);
  });

  return (
    <Form>
      <FormGroup>
        <label htmlFor="#bio">Bio</label>
        <FormInput id="#bio" placeholder="bio" />
      </FormGroup>
      <Uploader imageBucket="reviewerProfilePic" setImageURLs={setImageURLs} />
      <Login desiredRole={constants.REVIEWER} />
    </Form>
  );
}

export default SignUp;
