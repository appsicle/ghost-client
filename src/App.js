import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import {
  InputGroup, InputGroupAddon, FormInput, Button,
} from 'shards-react';
import config from './config';

ReactHeap.initialize(config.heapUrl);

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="main-container">
        <h1 className="title">Heighten</h1>
        <h1 className="tagline">
          Dating profile and text message insight from
          {' '}
          <u>real</u>
          {' '}
          women. Stop
          getting ghosted,
          {' '}
          <span className="highlight">heighten</span>
          {' '}
          your
          game.
        </h1>
        <InputGroup className="submit">
          <FormInput placeholder="Email Address" />
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
