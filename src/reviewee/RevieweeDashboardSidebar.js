import React from 'react';
import { logo } from '../icons/links';
import './reviewee-dashboard-sidebar.scss';

const RevieweeDashboardSidebar = () => {
  return (
    <div className="reviewee-dashboard-sidebar-container">
      <div className="reviewee-dashboard-sidebar-branding">
        <img width="35px" src={logo} alt="" />
        <h4 style={{ margin: 0 }}>Heighten</h4>
      </div>
      <button className="reviewee-dashboard-sidebar-item reviewee-dashboard-sidebar-item-active">
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">Home</span>
      </button>
      <button className="reviewee-dashboard-sidebar-item">
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">New Request</span>
      </button>
      <button className="reviewee-dashboard-sidebar-item">
        <img src="https://via.placeholder.com/25" />
        <span className="reviewee-dashboard-sidebar-item-text">Past Submissions</span>
      </button>
    </div>
  );
};

export default RevieweeDashboardSidebar;
