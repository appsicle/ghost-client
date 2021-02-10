/* eslint-disable no-alert */
import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './RevieweeDashboard.scss';

import React, { useState } from 'react';
import { FormTextarea, Button } from 'shards-react';
import Uploader from '../common/Uploader';
import { postTextMsgs } from '../services/TextMsgs';
import TipBubble from '../common/TipBubble';

function RevieweeDashboard() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [imageURLs, setImageURLs] = useState([]);

  return (
    <div className="form-group-container">
      <div className="uploader-container">
        <div className="uploader-title-container">
          <h5 className="uploader-title">Upload Screenshots</h5>
          <TipBubble
            elementId="uploader-tooltip"
            color="#c4c4c4"
            innerText="?"
            tooltipText="text1"
          />
        </div>
        <Uploader setImageURLs={setImageURLs} imageBucket="textMsgs" />
      </div>
      <label className="explanation-label" htmlFor="textarea">
        Additional Comments
      </label>
      <div>
        <TipBubble
          elementId="explanation-tooltip"
          color="#c4c4c4"
          innerText="?"
          tooltipText="text1"
        />
      </div>
      <FormTextarea
        className="explanation-textarea"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      <div className="explanation-submit-container">
        <Button // TODO: style button (padding)
          className="explanation-submit"
          onClick={() =>
            postTextMsgs(firstName, email, additionalInfo, imageURLs)
              .then((res) => {
                // TODO: a better confirmation of success
                alert('success');
                console.log('success', res);
                setFirstName('');
                setEmail('');
                setAdditionalInfo('');
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
    </div>
  );
}

export default RevieweeDashboard;
