import React, { useEffect } from "react";
import "./sectionRight.css";
import { SvgImg } from "../../components/svg/SvgImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const SectionRight = ({ color }) => {
  //  API
  useEffect(() => {
    const API_URL =
      "http://api.weatherstack.com/current?access_key=aa2111e89fb5da18f8c99c89f70a1731&query=Managua";

    const HTMLresponse = document.querySelector("#wheather-time");

    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const current = response.current.observation_time;
        const wheatherDesc = response.current.weather_descriptions;
        const wheatherImg = response.current.weather_icons;
        HTMLresponse.innerHTML = `<h3 class="observation-time">${current}</h3>
        <span class="weather_descriptions"><img class="wheather-img" src='${wheatherImg}'/> ${wheatherDesc}</span>`;
      })
      .catch((error) => error);
  });
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
        <div className={`widget widget-music theme-background`}>
          <div className="music">
            <div className="music-img"></div>
            <div className="music-name">
              <h5>Toys Soldier</h5>
              <span>Eminem</span>
            </div>
          </div>
          <div className="music-progress">
            <div className={`music-progress-bar theme`}></div>
          </div>
          <div className="reproductor-controls">
            <FontAwesomeIcon className="buttons" icon={faBackward} />
            <FontAwesomeIcon className="buttons" icon={faPause} />
            <FontAwesomeIcon className="buttons" icon={faForward} />
          </div>
        </div>
        <div
          id="wheather-time"
          className={`widget widge-time theme-background`}
        ></div>
        <div className={`widget widget-info theme-background`}>
          <div className="wiget-info-text">
            <h2>
              Everyday quote: <br />
            </h2>
            <span id="app"></span>
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
