import React from 'react';
import { useDispatch } from 'react-redux';
import './reviewee-dashboard-new-request-select-type.scss';
import { toNewRequestTextMsg, toNewRequestDating } from './revieweeTabNavSlice';

// TODO: use s3
import TextMsgImg from './asset1.png';
import DatingImg from './asset2.png';

const RevieweeDashboardNewRequestSelectType = () => {
  const dispatch = useDispatch();

  return (
    <div className="reviewee-dashboard-new-request-select-type-container">
      <h2>Submit a new Request</h2>
      <div className="reviewee-dashboard-new-request-select-type-card-container">
        <button
          className="reviewee-dashboard-new-request-select-type-card"
          onClick={() => dispatch(toNewRequestTextMsg())}
        >
          <img src={TextMsgImg} />
          <h5>Text Message</h5>
        </button>
        <button
          className="reviewee-dashboard-new-request-select-type-card"
          onClick={() => dispatch(toNewRequestDating())}
        >
          <img src={DatingImg} />
          <h5>Dating Profile</h5>
        </button>
      </div>
    </div>
  );
};
export default RevieweeDashboardNewRequestSelectType;
