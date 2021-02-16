import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import {
  InputGroup,
  InputGroupAddon,
  FormInput,
  Button,
  Alert,
  Form,
} from 'shards-react';
import { useState } from 'react';
import Particles from 'react-particles-js';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import config from './config';

ReactHeap.initialize(config.heapUrl);
ReactGA.initialize(config.googleAnalyticsUrl);
ReactGA.pageview(window.location.pathname + window.location.search);

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: true, // enable logs
};

ReactPixel.init('540516417190184', {}, options);
ReactPixel.pageView(); // For tracking page view

axios.defaults.withCredentials = true;

const params = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 1,
    },
    color: '#888888',
    links: {
      color: '#bbbbbb',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};
function App() {
  const [email, setEmail] = useState(null);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  const dismiss = () => {
    setVisible(false);
  };

  const dismissError = () => {
    setError(false);
  };

  const dismissDuplicateError = () => {
    setDuplicateError(false);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setDuplicateError(false);
    setVisible(false);
    try {
      await axios.post(`${config.apiUrl}/waitlist`, { email });
      setVisible(true);
      setEmail('');
    } catch (err) {
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 400:
            setError(true);
            break;
          case 409:
            setDuplicateError(true);
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <>
      <Particles params={params} />
      <Alert theme="success" dismissible={dismiss} open={visible}>
        Success! You will be notified when we launch! See you very soon!
      </Alert>
      <Alert theme="danger" dismissible={dismissError} open={error}>
        Oops! Something went wrong... Make sure you are using a valid email
        address.
      </Alert>
      <Alert
        theme="danger"
        dismissible={dismissDuplicateError}
        open={duplicateError}
      >
        You are already on this list!
      </Alert>
      <div className="main-container">
        <h1 className="title">Got ghosted?</h1>
        <h2 className="subtitle">Find out why.</h2>
        <h1 className="tagline">
          Get dating profile and text message insight from real women
        </h1>
        <Form onSubmit={onSubmit}>
          <InputGroup size="lg" className="submit">
            <FormInput
              style={{ height: '100%' }}
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <InputGroupAddon type="append">
              <Button type="submit" disabled={!email} theme="success">
                Join the waitlist!
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>

        <div className="image-container">
          <img
            className="image left"
            src="https://heighten-assets.s3-us-west-1.amazonaws.com/campaign/campaign1.png"
            alt=""
          />
          <img
            className="image right"
            src="https://heighten-assets.s3-us-west-1.amazonaws.com/campaign/campaign2.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
