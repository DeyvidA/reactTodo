import React from "react";
import "./sectionRight.css";
import { SvgImg } from "../../components/svg/SvgImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const SectionRight = ({ color }) => {
  return (
    <section className="section-chill">
      <div className="login-info">
        <div className="user-data">
          <h4>Deyvid Arauz</h4>
          <h6>My settings</h6>
        </div>
        <div className="user-profile"></div>
      </div>
      <div className="widgets">
        <div className={`widget widget-music ${color}-background`}>
          <div className="music">
            <div className="music-img"></div>
            <div className="music-name">
              <h5>Toys Soldier</h5>
              <span>Eminem</span>
            </div>
          </div>
          <div className="music-progress">
            <div className={`music-progress-bar ${color}`}></div>
          </div>
          <div className="reproductor-controls">
            <FontAwesomeIcon className="buttons" icon={faBackward} />
            <FontAwesomeIcon className="buttons" icon={faPause} />
            <FontAwesomeIcon className="buttons" icon={faForward} />
          </div>
        </div>
        <div className={`widget widge-time ${color}-background`}>
          <h3>8:48 AM</h3>
          <span>Now is almost Sunny</span>
        </div>
        <div className={`widget widget-info ${color}-background`}>
          <div className="wiget-info-text">
            <h2>
              Unslash <br />
              the freelance <br />
              super power
            </h2>
            <span>Un limited task, premium features and much more</span>
          </div>
          <div className="info-more">
            <SvgImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionRight };
