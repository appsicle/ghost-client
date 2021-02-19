import React from 'react';
import { useDispatch } from 'react-redux';
import './reviewee-dashboard-new-request-select-type.scss';
import { toNewRequestTextMsg, toNewRequestDating } from '../revieweeTabNavSlice';
import { submitText, submitProfile } from '../../icons/links';

const RevieweeDashboardNewRequestSelectType = () => {
  const dispatch = useDispatch();

  return (
    <div className="reviewee-dashboard-new-request-select-type-container">
      <h2>Submit a new Request</h2>
      <div className="reviewee-dashboard-new-request-select-type-card-container">
        <button
          type="button"
          className="reviewee-dashboard-new-request-select-type-card"
          onClick={() => dispatch(toNewRequestTextMsg())}
        >
          <img src={submitText} alt="text" />
          <h5>Text Message</h5>
        </button>
        <button
          type="button"
          className="reviewee-dashboard-new-request-select-type-card"
          onClick={() => dispatch(toNewRequestDating())}
        >
          <img src={submitProfile} alt="dating profile" />
          <h5>Dating Profile</h5>
        </button>
      </div>
    </div>
  );
};
export default RevieweeDashboardNewRequestSelectType;
