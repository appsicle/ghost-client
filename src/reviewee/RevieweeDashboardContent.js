import React, { useState } from 'react';
import RevieweeDashboardNewRequest from './RevieweeDashboardNewRequest';

// toggle between diff contents depending on clicked state
const RevieweeDashboardContent = () => {
  const [page, setPage] = useState(1);

  return <RevieweeDashboardNewRequest/>
};
export default RevieweeDashboardContent;
