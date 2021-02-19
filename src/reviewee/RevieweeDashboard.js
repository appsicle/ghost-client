/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import config from '../config';
import ContentDisplay from './Carousel';
import './RevieweeDashboard.scss';
import RevieweeSidebarItem from './RevieweeSidebarItem';

const displaySelectedTab = (displayId, pastSubmissions) =>
  pastSubmissions.map((submission) =>
    (submission._id === displayId ? (
      <ContentDisplay
        title={submission.title}
        images={submission.imageURLs}
        additionalInfo={submission.additionalInfo}
        reviews={submission.reviews}
      />
    ) : null));

const revieweeDashboard = () => {
  const [displayId, setDisplayId] = useState(null);
  const [pastSubmissions, setPastSubmissions] = useState([]);

  useEffect(() => {
    const getPastSubmissions = async () => {
      const response = await axios.get(`${config.apiUrl}/api/textMsgs/reviews`);
      console.log('here');
      console.log(response.data);
      setPastSubmissions(response.data);
      if (response.data) {
        setDisplayId(response.data[0]._id);
      }
    };
    getPastSubmissions();
  }, []);

  return (
    <div className="reviewee-dashboard-container">
      <div className="sidebar-container">
        <ul className="sidebar">
          <h4 className="sidebar-subtitle">Pending</h4>
          {pastSubmissions.length
            ? pastSubmissions.map((submission) =>
              (submission.status === 'pending'
                || submission.status === 'flagged_context' ? (
                  <RevieweeSidebarItem
                    onClick={() => setDisplayId(submission._id)}
                    key={uuid()}
                    submission={submission}
                    displayId={displayId}
                  />
                ) : null))
            : null}
          <h4 className="sidebar-subtitle">Reviewed</h4>
          {pastSubmissions.length
            ? pastSubmissions.map((submission) =>
              (submission.status === 'reviewed' ? (
                <RevieweeSidebarItem
                  onClick={() => setDisplayId(submission._id)}
                  key={uuid()}
                  submission={submission}
                  displayId={displayId}
                />
              ) : null))
            : null}
        </ul>
      </div>
      <div className="reviewee-dashboard-content">
        {displaySelectedTab(displayId, pastSubmissions)}
      </div>
    </div>
  );
};

export default revieweeDashboard;
