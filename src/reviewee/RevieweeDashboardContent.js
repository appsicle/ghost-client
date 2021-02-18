import { useSelector } from 'react-redux';
import { TAB_STATE } from './revieweeTabNavSlice';

import RevieweeDashboardNewRequest from './RevieweeDashboardNewRequest';

// toggle between diff contents depending on clicked state
const RevieweeDashboardContent = () => {
  const tab = useSelector((state) => state.revieweeTabNavSlice.tab);

  switch (tab) {
    case TAB_STATE.HOME:
      return <p>HOME</p>;
    case TAB_STATE.NEW_REQUEST:
      return <RevieweeDashboardNewRequest />;
    case TAB_STATE.PAST_SUBMISSIONS:
      return <p>PAST_SUBMISSIONS</p>;
    default:
      return <p>default</p>;
  }
};
export default RevieweeDashboardContent;
