import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHeap from 'reactjs-heap';
import Navbar from './Navbar';
import Home from './home/Home';
import Login from './Login';

ReactHeap.initialize('497288854');

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/faq">
            <div>
              faq
              {process.env.NODE_ENV}
            </div>
          </Route>
          <Route exact path="/pricing">
            <div>pricing</div>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
