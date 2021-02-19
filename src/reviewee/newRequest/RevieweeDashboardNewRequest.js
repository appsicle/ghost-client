import React from 'react';
import { useSelector } from 'react-redux';

import RevieweeDashboardNewRequestSelectType from './RevieweeDashboardNewRequestSelectType';
import RevieweeNewRequestForm from './RevieweeNewRequestForm';
import { REVIEWEE_NEW_REQUEST_NAV_OPTIONS } from '../revieweeTabNavSlice';

const RevieweeDashboardNewRequest = () => {
  const newRequestNav = useSelector(
    (state) => state.revieweeTabNavSlice.newRequestNav,
  );

  switch (newRequestNav) {
    case REVIEWEE_NEW_REQUEST_NAV_OPTIONS.TEXT_MSG:
      return <RevieweeNewRequestForm />;
    case REVIEWEE_NEW_REQUEST_NAV_OPTIONS.DATING_PROFILE:
      return <RevieweeNewRequestForm />;
    default:
      return <RevieweeDashboardNewRequestSelectType />;
  }
};
export default RevieweeDashboardNewRequest;
