/* eslint-disable no-alert */
import React, { useState } from 'react';
import { FormTextarea, Button, FormInput } from 'shards-react';

import { useSelector } from 'react-redux';
import { REVIEWEE_NEW_REQUEST_NAV_OPTIONS } from '../revieweeTabNavSlice';

import Uploader from '../../common/Uploader';
import TipBubble from '../../common/TipBubble';
import postTextMsgs from '../../services/TextMsgs';
import { textUpload } from '../../icons/links';
import './reviewee-new-request-form.scss';

function RevieweeForm() {
  const [title, setTitle] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [imageURLs, setImageURLs] = useState([]);

  const newRequestNav = useSelector(
    (state) => state.revieweeTabNavSlice.newRequestNav,
  );

  const requestType = newRequestNav === REVIEWEE_NEW_REQUEST_NAV_OPTIONS.TEXT_MSG
    ? 'TEXT_MSG'
    : 'DATING_PROFILE';

  return (
    <div className="form-card-container">
      <div className="form-group-container">
        <div className="uploader-form-title-container">
          <h5 className="uploader-form-title">
            Submit a
            {' '}
            {newRequestNav === REVIEWEE_NEW_REQUEST_NAV_OPTIONS.TEXT_MSG
              ? 'Text Message'
              : 'Dating Profile'}
          </h5>
          <label className="uploader-form-title-label">
            Name of Submission
            {' '}
            <span className="uploader-form-title-label-caption">
              (ex: convo with Jen)
            </span>
          </label>
          <FormInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Text Submission"
          />
        </div>
        <div className="uploader-container">
          <div className="uploader-title-container">
            <h5 className="uploader-title">Upload Screenshots</h5>
            <TipBubble
              elementId="uploader-tooltip"
              color="#c4c4c4"
              innerText="?"
              tooltipText="Make sure your screenshots are clear and visible for others to read!"
            />
          </div>
          <Uploader
            setImageURLs={setImageURLs}
            imageBucket="textMsgs"
            displayedImage={textUpload}
          />
        </div>
        <div className="uploader-title-container">
          <h5 className="uploader-title" htmlFor="textarea">
            Background information
          </h5>
          <TipBubble
            elementId="explanation-tooltip"
            color="#c4c4c4"
            innerText="?"
            tooltipText="Please explain the context behind what you are uploading and any additional information."
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
            disabled={!additionalInfo}
            onClick={() =>
              postTextMsgs(title, requestType, additionalInfo, imageURLs)
                .then((res) => {
                  // TODO: a better confirmation of success
                  alert('success');
                  console.log('success', res);
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
    </div>
  );
}

export default RevieweeForm;
