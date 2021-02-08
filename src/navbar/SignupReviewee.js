import React, { useEffect } from 'react';
import { Form } from 'shards-react';
import { useDispatch } from 'react-redux';
import Login from './GoogleButton';
import { closeModal } from './roleSelectionModalSlice';
import constants from '../constants';

function SignUp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeModal);
  });

  return (
    <Form>
      <Login desiredRole={constants.REVIEWEE} />
    </Form>
  );
}

export default SignUp;
