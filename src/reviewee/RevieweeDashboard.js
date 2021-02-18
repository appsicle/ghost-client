/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import config from '../config';
import ContentDisplay from './Carousel';
import './RevieweeDashboard.scss';
import RevieweeForm from './RevieweeForm';

const DATING_PROFILE = 'DATING_PROFILE';
const TEXT = 'TEXT';

const displaySelectedTab = (displayId, pastSubmissions) => {
  switch (displayId) {
    case DATING_PROFILE:
      return <RevieweeForm />;
    case TEXT:
      return <RevieweeForm />;
    default:
      return pastSubmissions.map((submission) =>
        submission._id === displayId ? (
          <ContentDisplay
            images={submission.imageURLs}
            additionalInfo={submission.additionalInfo}
            reviews={submission.reviews}
          />
        ) : null,
      );
  }
};

const revieweeDashboard = () => {
  const [displayId, setDisplayId] = useState(DATING_PROFILE);
  const [pastSubmissions, setPastSubmissions] = useState([]);

  useEffect(() => {
    const getPastSubmissions = async () => {
      const response = await axios.get(`${config.apiUrl}/api/textMsgs/reviews`);
      console.log(response.data);
      setPastSubmissions(response.data);
    };
    getPastSubmissions();
  }, []);

  return (
    <div className="reviewee-dashboard-container">
      <div className="sidebar-container">
        <ul className="sidebar">
          <li
            className={`sidebar-item ${
              DATING_PROFILE === displayId ? 'sidebar-item-active' : null
            }`}
          >
            <button type="button" onClick={() => setDisplayId(DATING_PROFILE)}>
              Review Dating Profile
            </button>
          </li>
          <li
            className={`sidebar-item ${
              TEXT === displayId ? 'sidebar-item-active' : null
            }`}
          >
            <button type="button" onClick={() => setDisplayId(TEXT)}>
              Review Text Messages
            </button>
          </li>
          <h4 className="sidebar-subtitle">Past Submissions</h4>
          {pastSubmissions.map((submission, idx) => (
            <li
              className={`sidebar-item ${
                submission._id === displayId ? 'sidebar-item-active' : null
              }`}
              key={uuid()}
            >
              <button
                type="button"
                onClick={() => {
                  setDisplayId(submission._id);
                }}
              >
                Submission #
                {submission.status === 'reviewed' ? 'reviewed' : null}
                {idx + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="reviewee-dashboard-content">
        {displaySelectedTab(displayId, pastSubmissions)}
      </div>
    </div>
  );
};

export default revieweeDashboard;
