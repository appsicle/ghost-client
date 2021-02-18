import React, { useState } from 'react';
import './reviewee-dashboard-new-request.scss';
import { Card } from 'shards-react';
import TextMsgImg from './asset1.png';

const RevieweeDashboardNewRequest = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="reviewee-dashboard-new-request-container">
      <h2>Submit a new Request</h2>
      <div className="reviewee-dashboard-new-request-card-container">
        <Card className="reviewee-dashboard-new-request-card">
          <img src={TextMsgImg} />
          <p>pic1</p>
        </Card>
        <Card className="reviewee-dashboard-new-request-card">
          <img src={TextMsgImg} />
          <p>pic2</p>
        </Card>
      </div>
    </div>
  );
};
export default RevieweeDashboardNewRequest;
