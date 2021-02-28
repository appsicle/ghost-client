/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FormTextarea, Form, Button } from 'shards-react';
import { uuid } from 'uuidv4';
import { Carousel } from 'react-responsive-carousel';
import config from '../../config';
import './ReviewerDashboard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// FIXME: when getting new data, carousel should always start on slide 1
// TODO: clear answers field after submission
function ReviewerDashboard() {
  const [textMsgObj, setTextMsgObj] = useState(null);
  const [answer, setAnswer] = useState('');

  const getAndSetNextReviewee = async () => {
    const nextReviewee = await axios.post(
      `${config.apiUrl}/api/textMsgs/getNext`,
    );
    if (nextReviewee && nextReviewee.data) {
      console.log(nextReviewee.data);
      setTextMsgObj(nextReviewee.data);
    } else {
      setTextMsgObj(null);
    }
  };

  const flagTextMsg = (textMsgId, category) => {
    axios
      .post(`${config.apiUrl}/api/textMsgs/flag`, {
        textMsgId,
        category,
      })
      .then((res) => {
        console.log(res);
        getAndSetNextReviewee();
        setAnswer('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAndSetNextReviewee();
  }, []);

  const sendAnswersToServer = () => {
    const answersObject = {
      textMsgId: textMsgObj._id,
      reviewContent: answer,
    };
    console.log(answersObject);
    axios
      .post(`${config.apiUrl}/api/textMsgs/review`, answersObject)
      .then((response) => {
        console.log(response);
        alert('success');
        getAndSetNextReviewee();
        setAnswer('');
      })
      .catch((err) => {
        console.error(err);
        alert('error');
      });
  };
  console.log(textMsgObj);

  return (
    <div className="reviewer-dashboard-container">
      <div className="reviewer-tutorial">
        <h4>
          The conversations below are from the point of view of a guy that got
          ghosted/rejected by a girl he was interested in.
          <br />
          Click photo to expand
        </h4>
      </div>
      {textMsgObj && textMsgObj.imageURLs && textMsgObj.imageURLs.length ? (
        <Carousel centerMode>
          {textMsgObj.imageURLs.map((url) => (
            <div key={uuid()}>
              <img src={url} alt="" />
              <p>screenshot</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>come back later</p>
      )}
      {textMsgObj && (
      <>
        <div className="age-container">
          <p>
            {`Age: ${
              textMsgObj && textMsgObj.revieweeObj && textMsgObj.revieweeObj.age
                ? textMsgObj.revieweeObj.age
                : ''
            }`}
          </p>
        </div>
        <div className="ethnicity-container">
          <p>
            {`Ethnicity: ${
              textMsgObj
            && textMsgObj.revieweeObj
            && textMsgObj.revieweeObj.ethnicity
                ? textMsgObj.revieweeObj.ethnicity
                : ''
            }`}
          </p>
        </div>
        <div className="location-container">
          <p>
            {`Location: ${
              textMsgObj
            && textMsgObj.revieweeObj
            && textMsgObj.revieweeObj.location
                ? textMsgObj.revieweeObj.location
                : ''
            }`}
          </p>
        </div>
        <div className="additionalInfo-container">
          <p>
            {`Additional Info: ${
              textMsgObj && textMsgObj.additionalInfo
                ? textMsgObj.additionalInfo
                : ''
            }`}
          </p>
        </div>
        <Form className="questions-container">
          <p>Are there any messages that he sent that would have turned you off? Which ones?</p>
          <p>Is there anything he did well during the conversations?</p>
          <p>Why do you think he got ghosted/rejected?</p>
          <p>Do you have any advice for him to improve his texting game?</p>
          <FormTextarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <Button
            onClick={sendAnswersToServer}
            disabled={!answer}
          >
            submit
          </Button>
          <Button
            theme="danger"
            onClick={() => flagTextMsg(textMsgObj._id, 'inappropriate')}
          >
            Flag
          </Button>
          <Button
            theme="warning"
            onClick={() => flagTextMsg(textMsgObj._id, 'needs more context')}
          >
            Needs more context
          </Button>
          <Button
            theme="light"
            onClick={() => flagTextMsg(textMsgObj._id, 'skip')}
          >
            Skip
          </Button>
        </Form>
      </>
      )}
    </div>
  );
}

export default ReviewerDashboard;
