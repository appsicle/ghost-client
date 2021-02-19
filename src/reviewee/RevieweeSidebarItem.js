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
  const dateSubmitted = new Date(submission.createdAt);

  const getFormattedDate = (createdAt) =>
    `${createdAt.getMonth() + 1}/${createdAt.getDay()}/${createdAt.getFullYear() % 100}`;

  const getFormattedTime = (createdAt) => {
    let hours = createdAt.getHours();
    let minutes = createdAt.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  const formattedDate = getFormattedDate(dateSubmitted);
  const formattedTime = getFormattedTime(dateSubmitted);

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
        <h5 className="sidebar-item-title">{submission.title}</h5>
      </div>
      <div className="sidebar-item-date-container">
        <h5 className="sidebar-item-date">{formattedDate}</h5>
        <h5 className="sidebar-item-date">{formattedTime}</h5>
      </div>
    </button>
  );
};

export default RevieweeSidebarItem;
