import './Home.scss';
import { Button } from 'shards-react';
import headerImg from '../images/home-header.svg';
import stepOneExample from '../images/step-one-example.svg';
import badText from '../images/textmsg.png';

function Home() {
  return (
    <div className="home-container">
      <section className="jumbotron-container">
        <div className="jumbotron-text-container">
          <h1 className="jumbotron-header-text">Got ghosted?</h1>
          <h3 className="jumbotron-sub-header-text">Never again.</h3>
          <h5 className="jumbotron-caption">
            Get your text messages analyzed and receive feedback from one of our
            female experts.
          </h5>
        </div>
        <div className="jumboton-image-container">
          <img src={headerImg} alt="texting" />
        </div>
      </section>
      <section className="how-it-works-container">
        <h1 className="how-it-works-title">How it works</h1>
        <div className="step-container">
          <div className="step-text-container">
            <h5 className="step-text">
              1. Upload any screenshots of past conversations that went wrong
            </h5>
          </div>
          <img className="step-example-image" src={badText} alt="" />
        </div>
        <div className="step-container">
          <img className="step-example" src={stepOneExample} alt="" />
          <div className="step-text-container">
            <h5 className="step-text step-two">
              2. Female experts will analyze the messages for you
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
          <img className="step-example" src={stepOneExample} alt="" />
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
