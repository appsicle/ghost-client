/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toHome,
  toNewRequest,
  toPastSubmissions,
  REVIEWEE_NAV_OPTIONS,
} from './revieweeTabNavSlice';
import { logo } from '../icons/links';
import './reviewee-dashboard-sidebar.scss';

const RevieweeDashboardSidebar = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.revieweeTabNavSlice.nav);

  return (
    <div className="reviewee-dashboard-sidebar-container">
      <div className="reviewee-dashboard-sidebar-branding">
        <img width="35px" src={logo} alt="" />
        <h4 style={{ margin: 0 }}>Heighten</h4>
      </div>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          nav === REVIEWEE_NAV_OPTIONS.HOME
            ? 'reviewee-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toHome())}
      >
        <img src="https://via.placeholder.com/25" alt="home" />
        <span className="reviewee-dashboard-sidebar-item-text">Home</span>
      </button>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          nav === REVIEWEE_NAV_OPTIONS.NEW_REQUEST
            ? 'reviewee-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toNewRequest())}
      >
        <img src="https://via.placeholder.com/25" alt="new" />
        <span className="reviewee-dashboard-sidebar-item-text">
          New Request
        </span>
      </button>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          nav === REVIEWEE_NAV_OPTIONS.PAST_SUBMISSIONS
            ? 'reviewee-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toPastSubmissions())}
      >
        <img src="https://via.placeholder.com/25" alt="history" />
        <span className="reviewee-dashboard-sidebar-item-text">
          Past Submissions
        </span>
      </button>
    </div>
  );
};

export default RevieweeDashboardSidebar;
