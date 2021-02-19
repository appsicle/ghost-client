import React from 'react';
import './reviewee-dashboard-new-request.scss';

// TODO: use s3
import TextMsgImg from './asset1.png';
import DatingImg from './asset2.png';

const RevieweeDashboardNewRequest = () => (
  <div className="reviewee-dashboard-new-request-container">
    <h2>Submit a new Request</h2>
    <div className="reviewee-dashboard-new-request-card-container">
      <button className="reviewee-dashboard-new-request-card">
        <img src={TextMsgImg} />
        <h5>Text Message</h5>
      </button>
      <button className="reviewee-dashboard-new-request-card">
        <img src={DatingImg} />
        <h5>Dating Profile</h5>
      </button>
    </div>
  </div>
);
export default RevieweeDashboardNewRequest;
