/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toHome,
  toNewRequest,
  toPastSubmissions,
  REVIEWER_NAV_OPTIONS,
} from './reviewerTabNavSlice';
import { logo } from '../icons/links';
import './ReviewerDashboardSidebar.scss';

const ReviewerDashboardSidebar = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.reviewerTabNavSlice.nav);

  return (
    <div className="reviewer-dashboard-sidebar-container">
      <div className="reviewer-dashboard-sidebar-branding">
        <img width="35px" src={logo} alt="" />
        <h4 style={{ margin: 0 }}>Heighten</h4>
      </div>
      <button
        className={`reviewer-dashboard-sidebar-item ${
          nav === REVIEWER_NAV_OPTIONS.HOME
            ? 'reviewer-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toHome())}
      >
        <img src="https://via.placeholder.com/25" alt="home" />
        <span className="reviewer-dashboard-sidebar-item-text">Home</span>
      </button>
      <button
        className={`reviewer-dashboard-sidebar-item ${
          nav === REVIEWER_NAV_OPTIONS.NEW_REQUEST
            ? 'reviewer-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toNewRequest())}
      >
        <img src="https://via.placeholder.com/25" alt="new" />
        <span className="reviewer-dashboard-sidebar-item-text">
          New Request
        </span>
      </button>
      <button
        className={`reviewer-dashboard-sidebar-item ${
          nav === REVIEWER_NAV_OPTIONS.PAST_SUBMISSIONS
            ? 'reviewer-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toPastSubmissions())}
      >
        <img src="https://via.placeholder.com/25" alt="history" />
        <span className="reviewer-dashboard-sidebar-item-text">
          Past Submissions
        </span>
      </button>
    </div>
  );
};

export default ReviewerDashboardSidebar;
