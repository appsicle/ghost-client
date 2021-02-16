import { Carousel } from 'react-responsive-carousel';
import { uuid } from 'uuidv4';
import './Carousel.scss';

const ReviewsDisplay = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <div>
        <img
          className="reviewer-profile-image"
          src={review.reviewerObj.profilePic}
          alt=""
        />
        <h4>{review.reviewContent}</h4>
      </div>
    ))}
  </div>
);

const ContentDisplay = ({ images, additionalInfo, reviews }) => (
  <div className="carousel-container">
    <Carousel centerMode>
      {images.map((url) => (
        <div key={uuid()}>
          <img src={url} alt="" />
          <p>screenshot</p>
        </div>
      ))}
    </Carousel>
    <h3>Your additional comments</h3>
    <p>{additionalInfo}</p>
    {reviews.length ? (
      <ReviewsDisplay reviews={reviews} />
    ) : (
      <h1>waiting to be reviewed</h1>
    )}
  </div>
);

export default ContentDisplay;
