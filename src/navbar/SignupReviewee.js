import React, { useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Login from './GoogleButton';
import Uploader from '../common/Uploader';
import constants from '../constants';
import config from '../config';

function SignUp() {
  const history = useHistory();
  const [imageURLs, setImageURLs] = useState([]);
  const [age, setAge] = useState(null);
  const [ethnicity, setEthnicity] = useState('');
  const [location, setLocation] = useState('');

  const onSuccess = (res) => {
    axios
      .post(`${config.apiUrl}/api/auth/googleSignup`, {
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
      <Uploader imageBucket="reviewerProfilePic" setImageURLs={setImageURLs} maxFiles={1} />
      <Login onSuccess={onSuccess} desiredRole={constants.REVIEWEE} />
    </Form>
  );
}

export default SignUp;
