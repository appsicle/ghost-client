/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import config from '../config';
import ContentDisplay from './Carousel';
import './RevieweeDashboard.scss';
import RevieweeDashboard from './RevieweeForm';

const SUBMIT = 'SUBMIT';
const SUBMIT2 = 'SUBMIT2';

const displaySelectedTab = (displayId, pastSubmissions) => {
  switch (displayId) {
    case SUBMIT:
      return <RevieweeDashboard />;
    case SUBMIT2:
      return <p>2</p>;
    default:
      return pastSubmissions.map((submission) =>
        (submission._id === displayId ? (
          <ContentDisplay images={submission.imageURLs} />
        ) : null));
  }
};

const revieweeDashboard = () => {
  const [displayId, setDisplayId] = useState(SUBMIT);
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
          <li className="sidebar-item">
            <button type="button" onClick={() => setDisplayId(SUBMIT)}>
              Upload Screenshots
            </button>
          </li>
          <li className="sidebar-item">
            <button type="button" onClick={() => setDisplayId(SUBMIT2)}>
              Upload Dating Profile
            </button>
          </li>
          <h4 className="sidebar-subtitle">Past Submissions</h4>
          {pastSubmissions.map((submission, idx) => (
            <li className="sidebar-item" key={uuid()}>
              <button
                type="button"
                onClick={() => {
                  setDisplayId(submission._id);
                }}
              >
                Submission #
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
