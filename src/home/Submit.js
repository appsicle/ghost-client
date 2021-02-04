import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './Submit.scss';

import React, { useState } from 'react';
import {
  Form, FormGroup, FormInput, FormTextarea, Button,
} from 'shards-react';
import Uploader from './Uploader';
import { postTextMsgs } from '../services/TextMsgs';

function Submit() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [imageURLs, setImageURLs] = useState([]);

  return (
    <div className="form-group-container">
      <Form className="form-container">
        <FormGroup>
          <label htmlFor="firstName">First Name</label>
          <FormInput
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <FormInput
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
      </Form>
      <label className="textarea-label" htmlFor="textarea">
        Additional Information
      </label>
      <FormTextarea
        className="textarea"
        value={additionalInformation}
        onChange={(e) => setAdditionalInformation(e.target.value)}
      />
      <div className="uploader-container">
        <Uploader setImageURLs={setImageURLs} />
      </div>
      <Button // TODO: style button (padding)
        onClick={() => postTextMsgs(firstName, email, additionalInformation, imageURLs)
          .then((res) => {
            // TODO: a better confirmation of success
            alert('success');
            console.log('success', res);
            setFirstName('');
            setEmail('');
            setAdditionalInformation('');
            setImageURLs([]);
          })
          .catch((err) => {
            // TODO: a better confirmation of failure
            alert('failed');
            console.error(err);
          })}
      >
        Submit
      </Button>
    </div>
  );
}

export default Submit;
