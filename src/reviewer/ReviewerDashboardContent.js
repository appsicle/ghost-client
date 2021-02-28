import { useSelector } from 'react-redux';
import { REVIEWER_NAV_OPTIONS } from './reviewerTabNavSlice';
// toggle between diff contents depending on clicked state
const ReviewerDashboardContent = () => {
  const nav = useSelector((state) => state.reviewerTabNavSlice.nav);

  switch (nav) {
    case REVIEWER_NAV_OPTIONS.HOME:
      return <p>HOME</p>;
    case REVIEWER_NAV_OPTIONS.NEW_REQUEST:
      return <p>new request</p>;
    case REVIEWER_NAV_OPTIONS.PAST_SUBMISSIONS:
      return <p>past submission</p>;
    default:
      return <p>default</p>;
  }
};
export default ReviewerDashboardContent;
