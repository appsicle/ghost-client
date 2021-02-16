import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import {
  InputGroup, InputGroupAddon, FormInput, Button,
} from 'shards-react';
import Particles from 'react-particles-js';
import config from './config';

ReactHeap.initialize(config.heapUrl);

axios.defaults.withCredentials = true;

const params = {
  particles: {
    number: {
      value: 70,
    },
    size: {
      value: 2,
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
  return (
    <>
      <Particles params={params} />
      <div className="main-container">
        <h1 className="title">Got ghosted?</h1>
        <h2 className="subtitle">Find out why.</h2>
        <h1 className="tagline">
          Get dating profile and text message
          insight from real women

        </h1>
        <InputGroup size="lg" className="submit">
          <FormInput style={{ height: '100%' }} placeholder="Email Address" />
          <InputGroupAddon type="append">
            <Button theme="success">Join the waitlist now!</Button>
          </InputGroupAddon>
        </InputGroup>
        <div className="image-container">
          <img
            className="left"
            src="https://heighten-assets.s3-us-west-1.amazonaws.com/campaign2.png"
            alt=""
          />
          <img
            className="right"
            src="https://heighten-assets.s3-us-west-1.amazonaws.com/campaign1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
