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
// TODO: clear answers field after submission
function ReviewerDashboard() {
  const [textMsgObj, setTextMsgObj] = useState(null);
  const [answers, setAnswers] = useState(questions);

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
    axios.post(`${config.apiUrl}/api/textMsgs/flag`, {
      textMsgId, category,
    }).then((res) => {
      console.log(res);
      getAndSetNextReviewee();
      setAnswers(questions);
    }).catch((err) => {
      console.log(err);
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
      textMsgId: textMsgObj._id,
      reviewContent: answers,
    };
    console.log(answersObject);
    axios.post(
      `${config.apiUrl}/api/textMsgs/review`,
      answersObject,
    ).then((response) => {
      console.log(response);
      alert('success');
      getAndSetNextReviewee();
    }).catch((err) => {
      console.error(err);
      alert('error');
    });
  };
  console.log(textMsgObj);

  return (
    <div className="reviewer-dashboard-container">
      <div className="reviewer-tutorial">
        <Button theme="danger" onClick={() => flagTextMsg(textMsgObj._id, 'inappropriate')}>Flag</Button>
        <Button theme="warning" onClick={() => flagTextMsg(textMsgObj._id, 'needs more context')}>Needs more context</Button>
        <Button theme="light" onClick={() => flagTextMsg(textMsgObj._id, 'skip')}>Skip</Button>
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
      <div className="age-container">
        <p>
          {`Age: ${textMsgObj && textMsgObj.revieweeObj && textMsgObj.revieweeObj.age ? textMsgObj.revieweeObj.age : ''}`}
        </p>
      </div>
      <div className="ethnicity-container">
        <p>
          {`Ethnicity: ${textMsgObj && textMsgObj.revieweeObj && textMsgObj.revieweeObj.ethnicity ? textMsgObj.revieweeObj.ethnicity : ''}`}
        </p>
      </div>
      <div className="location-container">
        <p>
          {`Location: ${textMsgObj && textMsgObj.revieweeObj && textMsgObj.revieweeObj.location ? textMsgObj.revieweeObj.location : ''}`}
        </p>
      </div>
      <div className="additionalInfo-container">
        <p>
          {`Additional Info: ${textMsgObj && textMsgObj.additionalInfo ? textMsgObj.additionalInfo : ''}`}
        </p>
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
