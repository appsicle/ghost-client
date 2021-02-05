import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHeap from 'reactjs-heap';
// import Navbar from './Navbar';
import Home from './home/Home';
import Login from './Login';
import Tutorial from './Tutorial';
import ReviewerDashboard from './reviewerDashboard/ReviewerDashboard';

ReactHeap.initialize('497288854');

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route exact path="/">
            <Tutorial />
            <Home />
          </Route>
          <Route exact path="/faq">
            <div>faq</div>
          </Route>
          <Route exact path="/pricing">
            <div>pricing</div>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/banana">
            <ReviewerDashboard messageId="601c6dd6afa9cc001ff9339d" />
          </Route>
          <Route exact path="/crayon">
            <ReviewerDashboard messageId="601c6d3fafa9cc001ff9339c" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
