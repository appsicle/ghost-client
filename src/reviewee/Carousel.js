import './Carousel.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import empty from './empty.svg';

const ReviewsDisplay = ({ reviews }) => (
  <>
    {reviews.map((review) => (
      <div className="feedback-bubbles-container">
        <img
          className="reviewer-profile-image"
          src={review.reviewerObj.profilePic}
          alt=""
        />
        <div className="chat-bubble-container">
          <h4 className="chat-bubble-text">{review.reviewContent}</h4>
        </div>
      </div>
    ))}
  </>
);

const ContentDisplay = ({ images, additionalInfo, reviews }) => {
  const items = images.map((url) => (
    <img
      style={{ marginBottom: images.length <= 1 ? '20px' : '0' }}
      alt="review"
      src={url}
    />
  ));
  return (
    <div className="carousel-container">
      <h4 className="carousel-title">Convo with Jessica</h4>
      <h4 className="carousel-your-submission">Your Submission</h4>
      <h4 className="carousel-submission-type">Text Submission</h4>
      <AliceCarousel
        disableButtonsControls={items.length <= 1}
        disableDotsControls={items.length <= 1}
        infinite={items.length > 1}
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 3,
          },
        }}
        items={items}
      />
      <div className="carousel-background-info-container">
        <p>{additionalInfo}</p>
      </div>
      <div className="carousel-feedback-container">
        <h4 className="carousel-feedback-title">Reviewer Feedback</h4>
        {reviews.length ? (
          <ReviewsDisplay reviews={reviews} />
        ) : (
          <div className="carousel-feedback-empty">
            <img className="carousel-feedback-empty-image" src={empty} alt="" />
            <h4>Nothing to see at the moment...</h4>
            <h6>We’re still working on it - check back later!</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;
