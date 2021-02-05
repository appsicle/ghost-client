// post request on submit, to send object
// {
//   5 answers,
//   image,
//   id
// }
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  FormTextarea,
  Card,
  CardHeader,
  CardImg,
  Form,
  Button,
} from 'shards-react';
import Uploader from '../home/Uploader';
import './ReviewerDashboard.css';
import questions from './reviewerQuestions';

const apiEndpoint = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_ENDPOINT_DEV
  : process.env.REACT_APP_API_ENDPOINT_PROD;

function ReviewerDashboard({ messageId }) {
  const [screenshots, setScreenshots] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [answers, setAnswers] = useState(questions);

  useEffect(async () => {
    console.log(answers);
    const response = await axios.get(
      `${apiEndpoint}/api/textMsgs/retrieve/${messageId}`,
    );
    const images = response.data.retrievedTextMsg.imageURLs;

    const temp = [];
    for (let i = 0; i < images.length; i += 1) {
      temp.push({
        id: i + 1,
        url: images[i],
      });
    }
    setScreenshots(temp);
  }, []);

  const setAnswer = (e) => {
    const temp = answers;
    temp[e.target.name].answer = e.target.value;
    setAnswers(temp);
  };

  const isAllFilledOut = () => Object.values(answers).every(
    (answer) => answer !== '' && answer !== undefined,
  ) && imageURLs.length;

  const sendAnswersToServer = async () => {
    const answersObject = {
      reviewContent: answers,
      imageURLs,
    };
    console.log(answersObject);
    const response = await axios.post(
      `${apiEndpoint}/api/textMsgs/review`,
      answersObject,
    );
    console.log(response);
  };

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
      <div className="image-container">
        {screenshots.map((obj) => (
          <Card key={obj.id} style={{ maxWidth: '450px' }}>
            <CardHeader>
              Photo
              {obj.id}
            </CardHeader>
            <CardImg onClick={() => window.open(obj.url)} src={obj.url} />
          </Card>
        ))}
      </div>
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
        <label htmlFor=".image">
          Required: Upload a photo of yourself (this is just to verify your
          identity)
        </label>
        <Uploader
          imageBucket="reviewerProfilePic"
          setImageURLs={setImageURLs}
        />
        <Button onClick={sendAnswersToServer} disabled={!isAllFilledOut()}>
          submit
        </Button>
      </Form>
    </div>
  );
}

export default ReviewerDashboard;
