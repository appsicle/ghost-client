import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import {
  InputGroup, InputGroupAddon, FormInput, Button, Alert,
} from 'shards-react';
import { useState } from 'react';
import Particles from 'react-particles-js';
import ReactGA from 'react-ga';
import config from './config';

ReactHeap.initialize(config.heapUrl);
ReactGA.initialize(config.googleAnalyticsUrl);
ReactGA.pageview(window.location.pathname + window.location.search);

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

  const dismiss = () => {
    setVisible(false);
  };

  const dismissError = () => {
    setError(false);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    setError(false);
    try {
      await axios.post(`${config.apiUrl}/waitlist`, { email });
      setVisible(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Particles params={params} />
      <Alert theme="success" dismissible={dismiss} open={visible}>
        Success! Thanks for joining the waitlist!
      </Alert>
      <Alert theme="danger" dismissible={dismissError} open={error}>
        Oops! Something went wrong... Make sure you are using a valid email address.
      </Alert>
      <div className="main-container">
        <h1 className="title">Got ghosted?</h1>
        <h2 className="subtitle">Find out why.</h2>
        <h1 className="tagline">
          Get dating profile and text message insight from real women
        </h1>
        <InputGroup size="lg" className="submit">
          <FormInput
            style={{ height: '100%' }}
            onChange={onChange}
            placeholder="Email Address"
          />
          <InputGroupAddon type="append">
            <Button disabled={!email} onClick={onSubmit} theme="success">
              Join the waitlist now!
            </Button>
          </InputGroupAddon>
        </InputGroup>
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
