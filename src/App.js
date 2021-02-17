import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHeap from 'reactjs-heap';
import axios from 'axios';
import Home from './home/Home';
import constants from './constants';
import RoleProtectedRoute from './routes/roleProtectedRoute';
import SignupReviewee from './navbar/SignupReviewee';
import Layout from './common/Layout';
import SignUpReviewer from './navbar/SignupReviewer';
import Login from './navbar/Login';
import ReviewerDashboard from './reviewer/ReviewerDashboard';
import Main from './reviewee/RevieweeDashboard';
import config from './config';

ReactHeap.initialize(config.heapUrl);
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signupReviewee">
          <SignupReviewee />
        </Route>
        <Route exact path="/signupReviewer">
          <SignUpReviewer />
        </Route>
        <RoleProtectedRoute
          desiredRole={constants.REVIEWEE}
          path="/revieweeDashboard"
        >
          <>
            <Layout>
              <Main />
            </Layout>
          </>
        </RoleProtectedRoute>
        <RoleProtectedRoute
          desiredRole={constants.REVIEWER}
          path="/reviewerDashboard"
        >
          <>
            <Layout>
              <ReviewerDashboard />
            </Layout>
          </>
        </RoleProtectedRoute>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <div>about</div>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
