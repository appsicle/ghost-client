import "react-dropzone-uploader/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./Submit.scss";

import Uploader from "../src/Uploader";
import { Form, FormGroup, FormInput } from "shards-react";

function Submit() {
  return (
    <div className="form-container">
      <Form>
        <FormGroup>
          <label htmlFor="username">First Name</label>
          <FormInput id="username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <FormInput id="email" />
        </FormGroup>
      </Form>
      <div className="uploader-container">
        <Uploader />
      </div>
    </div>
  );
}

export default Submit;
