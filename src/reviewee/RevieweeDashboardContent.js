/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RevieweeDashboardNewRequest from './RevieweeDashboardNewRequest';
import RevieweeForm from './RevieweeForm';

// toggle between diff contents depending on clicked state
const RevieweeDashboardContent = () => {
  const [page, setPage] = useState(2);

  switch (page) {
    case 1:
      return <RevieweeDashboardNewRequest />;
    default:
      return <RevieweeForm />;
  }
};
export default RevieweeDashboardContent;
