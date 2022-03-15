import "./sectionRight.css";
import "react-slideshow-image/dist/styles.css";

import { Zoom } from "react-slideshow-image";
import React, { useEffect, useContext } from "react";
import { SvgImg } from "../../components/svg/SvgImg";
import { TodoContext } from "../../components/TodoContext";

// Provitional Img Imports
import logo from "../../img/Nicarao-Agency---Vertical-Logo---Full-Color.png";
import logo1 from "../../img/Nicarao-Agency-Horizontal-Black.png";
import logo2 from "../../img/Nicarao-Agency-Horizontal-Blue-and-White.png";
import logo3 from "../../img/Nicarao-Agency-Horizontal-Logo-Full-Color.png";
import logo4 from "../../img/Nicarao-Agency-Horizontal-White-and-gray.png";
import logo5 from "../../img/Nicarao-Agency-Horizontal-White.png";
import logo6 from "../../img/Nicarao-Agency-Vertical-Black.png";

const SectionRight = () => {
  const { day } = useContext(TodoContext);

  // Wheather API
  useEffect(() => {
    const API_URL_WHEATHER =
      "http://api.weatherstack.com/current?access_key=aa2111e89fb5da18f8c99c89f70a1731&query=Managua";

    const HTMLresponse = document.querySelector("#wheather-time");

    fetch(API_URL_WHEATHER)
      .then((response) => response.json())
      .then((response) => {
        const locatition = response.location.country;
        const current = response.location.region;
        const wheatherDesc = response.current.weather_descriptions;
        const wheatherImg = response.current.weather_icons;
        HTMLresponse.innerHTML = `<h3 class="observation-time">${current}-${locatition} </h3>
        <span class="weather_descriptions"><img class="wheather-img" src='${wheatherImg}'/> ${wheatherDesc}</span>`;
      })
      .catch((error) => error);
  });

  // Quotes API
  useEffect(() => {
    const API_URL_QUOTES = `http://localhost:8080/quotes?date=${day}`;

    fetch(API_URL_QUOTES)
      .then((response) => response.json())
      .then((response) => {
        const HTMLresponse = document.querySelector("#app");
        const quoteText = response[0].quote;
        const quoteAuthor = response[0].author;
        return (HTMLresponse.innerHTML = `<cite class="quote"><h4>"${quoteText}"</h4> <div className="author-name">-${quoteAuthor}.</div></cite>`);
      })
      .catch((error) => error);
  }, [day]);

  // SLIDER IMAGES
  const images = [logo, logo1, logo2, logo3, logo4, logo5, logo6];

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
          <Zoom scale={0.4} duration={1000} arrows={false}>
            {images.map((each, index) => (
              <img
                key={index}
                src={each}
                style={{ width: "100%" }}
                alt="time"
              />
            ))}
          </Zoom>
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
