import { useSelector } from 'react-redux';
import { REVIEWEE_NAV_OPTIONS } from './revieweeTabNavSlice';
import RevieweeDashboardNewRequest from './newRequest/RevieweeDashboardNewRequest';
import PastSubmissions from './pastSubmissions/PastSubmissions';

// toggle between diff contents depending on clicked state
const RevieweeDashboardContent = () => {
  const nav = useSelector((state) => state.revieweeTabNavSlice.nav);

  switch (nav) {
    case REVIEWEE_NAV_OPTIONS.HOME:
      return <p>HOME</p>;
    case REVIEWEE_NAV_OPTIONS.NEW_REQUEST:
      return <RevieweeDashboardNewRequest />;
    case REVIEWEE_NAV_OPTIONS.PAST_SUBMISSIONS:
      return <PastSubmissions />;
    default:
      return <p>default</p>;
  }
};
export default RevieweeDashboardContent;
