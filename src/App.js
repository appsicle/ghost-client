import 'react-dropzone-uploader/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHeap from 'reactjs-heap';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import RoleSelection from './RoleSelection';
import Tutorial from './Tutorial';
import config from './constants';
import RoleProtectedRoute from './routes/roleProtectedRoute';

ReactHeap.initialize('497288854');

const buyer = <div>buyer</div>;
const seller = <div>seller</div>;

function App() {
  return (
    <Router>
      <Navbar />
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
          <Route exact path="/role">
            <RoleSelection />
          </Route>
          <RoleProtectedRoute desiredRole={config.REVIEWEE} path="/buyer">{buyer}</RoleProtectedRoute>
          <RoleProtectedRoute desiredRole={config.REVIEWER} path="/seller">{seller}</RoleProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
