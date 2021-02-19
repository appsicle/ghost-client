/* eslint-disable no-underscore-dangle */
import { pending, flagged, reviewed } from '../icons/links';
import './RevieweeSidebarItem.scss';

const RevieweeSidebarItem = ({ submission, displayId, onClick }) => {
  let icon;
  switch (submission.status) {
    case 'pending':
      icon = pending;
      break;
    case 'flagged_context':
      icon = flagged;
      break;
    default:
      icon = reviewed;
      break;
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`sidebar-item ${
        submission._id === displayId ? 'sidebar-item-active' : ''
      }`}
    >
      <img src={icon} alt={submission.status} />
      <div className="sidebar-item-title-container">
        <h5 className="sidebar-item-title">Coversation with Jessica</h5>
      </div>
      <h5 className="sidebar-item-date">10/23/20</h5>
    </button>
  );
};

export default RevieweeSidebarItem;
