/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FormTextarea, Form, Button } from 'shards-react';
import { uuid } from 'uuidv4';
import { Carousel } from 'react-responsive-carousel';
import questions from './reviewerQuestions';
import config from '../config';
import './ReviewerDashboard.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// FIXME: when getting new data, carousel should always start on slide 1

function ReviewerDashboard() {
  const [screenshots, setScreenshots] = useState([]);
  const [answers, setAnswers] = useState(questions);
  const [messageId, setMessageId] = useState(undefined);

  const getAndSetNextReviewee = async () => {
    const nextReviewee = await axios.post(
      `${config.apiUrl}/api/textMsgs/getNext`,
    );
    if (nextReviewee && nextReviewee.data) {
      console.log(nextReviewee.data);
      setMessageId(nextReviewee.data._id);
      setScreenshots(nextReviewee.data.imageURLs);
    } else {
      setMessageId(undefined);
      setScreenshots([]);
    }
  };

  const refreshDatabase = async () => {
    await axios.post(`${config.apiUrl}/api/textMsgs/_clear`, {
      reviewerId: 'c7ac1f6f-44de-4685-b561-227bc3a36bc4',
      review: false,
      seen: true,
    });
  };

  useEffect(() => {
    getAndSetNextReviewee();
  }, []);

  const setAnswer = (e) => {
    const temp = answers;
    temp[e.target.name].answer = e.target.value;
    setAnswers(temp);
  };

  const isAllFilledOut = () =>
    Object.values(answers).every(
      (answer) => answer !== '' && answer !== undefined,
    );

  const sendAnswersToServer = () => {
    const answersObject = {
      textMsgId: messageId,
      reviewContent: answers,
    };
    console.log(answersObject);
    axios.post(
      `${config.apiUrl}/api/textMsgs/review`,
      answersObject,
    ).then((response) => {
      console.log(response);
      alert('success');
    }).catch((err) => {
      console.error(err);
      alert('error');
    });
  };

  return (
    <div className="reviewer-dashboard-container">
      <div className="reviewer-tutorial">
        <Button onClick={getAndSetNextReviewee}>get more</Button>
        <Button onClick={refreshDatabase}>refresh db for albert</Button>
        <h4>
          The conversations below are from the point of view of a guy that got
          ghosted/rejected by a girl he was interested in.
          <br />
          Click photo to expand
        </h4>
      </div>
      {screenshots.length ? (
        <Carousel centerMode>
          {screenshots.map((url) => (
            <div key={uuid()}>
              <img src={url} alt="" />
              <p>screenshot</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>come back later</p>
      )}
      <div className="context-container">
        <p>context:</p>
      </div>
      <Form className="questions-container">
        {questions.map((questionObject, idx) => (
          <React.Fragment key={questionObject.question}>
            <p className={questionObject.question}>{questionObject.question}</p>
            <FormTextarea name={idx} onChange={setAnswer} />
          </React.Fragment>
        ))}
        <Button onClick={sendAnswersToServer} disabled={!isAllFilledOut()}>
          submit
        </Button>
      </Form>
    </div>
  );
}

export default ReviewerDashboard;
