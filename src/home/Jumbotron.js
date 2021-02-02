import Submit from './Submit';
import './Jumbotron.scss';

function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <div className="jumbotron-header-container">
        <h1 className="jumbotron-header">Got ghosted?</h1>
        <h2 className="jumbotron-subheader">Never again.</h2>
      </div>
      <Submit />
    </div>
  );
}

export default Jumbotron;
