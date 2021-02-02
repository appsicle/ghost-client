import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './Submit.scss';

import {
  Form, FormGroup, FormInput, FormTextarea,
} from 'shards-react';
import Uploader from './Uploader';

function Submit() {
  return (
    <div className="form-group-container">
      <Form className="form-container">
        <FormGroup>
          <label htmlFor="username">First Name</label>
          <FormInput id="username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <FormInput id="email" />
        </FormGroup>
      </Form>
      <label className="textarea-label" htmlFor="textarea">Additional Information</label>
      <FormTextarea className="textarea" />
      <div className="uploader-container">
        <Uploader />
      </div>
    </div>
  );
}

export default Submit;
