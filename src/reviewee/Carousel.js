import { Carousel } from 'react-responsive-carousel';
import { uuid } from 'uuidv4';
import './Carousel.scss';

const ReviewsDisplay = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <div>
        <img className="reviewer-profile-image" src={review.reviewerObj.profilePic} alt="" />

        {review.reviewContent.map((content) => (
          <>
            <h1>{content.question}</h1>
            <h4>{content.answer}</h4>
          </>
        ))}
      </div>
    ))}
  </div>
);

const ContentDisplay = ({ images, reviews }) => (
  <div className="carousel-container">
    <Carousel centerMode>
      {images.map((url) => (
        <div key={uuid()}>
          <img src={url} alt="" />
          <p>screenshot</p>
        </div>
      ))}
    </Carousel>
    {reviews.length ? <ReviewsDisplay reviews={reviews} /> : <h1>waiting to be reviewed</h1>}
  </div>
);

export default ContentDisplay;
