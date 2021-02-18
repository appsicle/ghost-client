import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toHome,
  toNewRequest,
  toPastSubmissions,
  TAB_STATE,
} from './revieweeTabNavSlice';
import { logo } from '../icons/links';
import './reviewee-dashboard-sidebar.scss';

const RevieweeDashboardSidebar = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.revieweeTabNavSlice.tab);

  return (
    <div className="reviewee-dashboard-sidebar-container">
      <div className="reviewee-dashboard-sidebar-branding">
        <img width="35px" src={logo} alt="" />
        <h4 style={{ margin: 0 }}>Heighten</h4>
      </div>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          tab === TAB_STATE.HOME ? 'reviewee-dashboard-sidebar-item-active' : ''
        }`}
        onClick={() => dispatch(toHome())}
      >
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">Home</span>
      </button>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          tab === TAB_STATE.NEW_REQUEST
            ? 'reviewee-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toNewRequest())}
      >
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">
          New Request
        </span>
      </button>
      <button
        className={`reviewee-dashboard-sidebar-item ${
          tab === TAB_STATE.PAST_SUBMISSIONS
            ? 'reviewee-dashboard-sidebar-item-active'
            : ''
        }`}
        onClick={() => dispatch(toPastSubmissions())}
      >
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">
          Past Submissions
        </span>
      </button>
    </div>
  );
};

export default RevieweeDashboardSidebar;
