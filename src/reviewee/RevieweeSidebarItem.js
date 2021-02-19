/* eslint-disable no-underscore-dangle */
import pending from './pending.svg';
import flagged from './flagged.svg';
import reviewed from './reviewed.svg';
import './RevieweeSidebarItem.scss';

const RevieweeSidebarItem = ({ submission, displayId, onClick }) => {
  let icon;
  switch (submission.status) {
    case 'Not Reviewed':
      icon = pending;
      break;
    case 'FLAGGED':
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
