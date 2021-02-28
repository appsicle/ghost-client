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
import Layout from './common/Layout';
// import ReviewerDashboard from './reviewer/ReviewerDashboard';
import config from './config';
import SHCLayout from './common/SHCLayout';
import RevieweeDashboardSidebar from './reviewee/RevieweeDashboardSidebar';
import RevieweeDashboardContent from './reviewee/RevieweeDashboardContent';
import ReviewerDashboardSidebar from './reviewer/ReviewerDashboardSidebar';
import ReviewerDashboardContent from './reviewer/ReviewerDashboardContent';
import Profile from './Profile/Profile';

ReactHeap.initialize(config.heapUrl);
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Switch>
        <RoleProtectedRoute
          desiredRole={constants.REVIEWEE}
          path="/revieweeDashboard"
        >
          <>
            <SHCLayout
              Sidebar={<RevieweeDashboardSidebar />}
              Header={<Profile />}
              Content={<RevieweeDashboardContent />}
            />
          </>
        </RoleProtectedRoute>
        <RoleProtectedRoute
          desiredRole={constants.REVIEWER}
          path="/reviewerDashboard"
        >
          <>
            <SHCLayout
              Sidebar={<ReviewerDashboardSidebar />}
              Header={<Profile />}
              Content={<ReviewerDashboardContent />}
            />
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
