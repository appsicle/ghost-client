import "react-dropzone-uploader/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/faq">
            <div>faq</div>
          </Route>
          <Route exact path="/pricing">
            <div>pricing</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
