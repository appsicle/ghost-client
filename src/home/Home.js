import './Home.scss';
import { Button } from 'shards-react';
import {
  homeHeader,
  textMsg,
  textMsgFeedback,
  reviewers,
} from '../images/links';

function Home() {
  return (
    <div className="home-container">
      <section className="jumbotron-container">
        <div className="jumbotron-text-container">
          <h1 className="jumbotron-header-text">Got ghosted?</h1>
          <h3 className="jumbotron-sub-header-text">Find out why.</h3>
          <h5 className="jumbotron-caption">
            Get your dating profiles and text messages analyzed by real women.
          </h5>
          <Button size="md" className="jumbotron-button">Try it free! No CC Required</Button>
        </div>
        <div className="jumboton-image-container">
          <img src={homeHeader} alt="texting" />
        </div>
      </section>
      <section id="how-it-works" className="how-it-works-container">
        <h1 className="how-it-works-title">How it works</h1>
        <div className="step-container">
          <div className="step-text-container">
            <h5 className="step-text">
              1. Upload any screenshots of past conversations that went wrong
            </h5>
          </div>
          <img className="step-example-image" src={textMsg} alt="" />
        </div>
        <div className="step-container">
          <img className="step-two-example-image" src={reviewers} alt="" />
          <div className="step-text-container">
            <h5 className="step-text step-two">
              2. Our team of female reviewers will analyze the messages
            </h5>
          </div>
        </div>
        <div className="step-container">
          <div className="step-text-container">
            <h5 className="step-text">
              3. You will receive detailed feedback on what you could have done
              better
            </h5>
          </div>
          <img className="step-example" src={textMsgFeedback} alt="" />
        </div>
        <Button className="call-to-action-button">Get Started</Button>
      </section>
      <section className="experts-container">
        <h1 className="experts-title">Our Experts</h1>
        <div className="experts-container">xd</div>
      </section>
    </div>
  );
}

export default Home;
