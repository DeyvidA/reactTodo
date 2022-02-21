import React, { useEffect } from "react";
import "./sectionRight.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SvgImg } from "../../components/svg/SvgImg";

const SectionRight = () => {
  //  API CONNECTIONS

  // Wheather API
  useEffect(() => {
    const API_URL_WHEATHER =
      "..,http://api.weatherstack.com/current?access_key=aa2111e89fb5da18f8c99c89f70a1731&query=Managua";

    const HTMLresponse = document.querySelector("#wheather-time");

    fetch(API_URL_WHEATHER)
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

  // Quotes API
  useEffect(() => {
    const API_URL_QUOTES = "http://localhost:8080/quotes";

    fetch(API_URL_QUOTES)
      .then((response) => response.json())
      .then((response) => {
        const HTMLresponse = document.querySelector("#app");
        const quoteText = response[0].quote;
        const quoteAuthor = response[0].author;
        console.log(quoteAuthor);
        return (HTMLresponse.innerHTML = `<cite><h4>"${quoteText}"</h4> <div className="author-name">-${quoteAuthor}.</div></cite>`);
      })
      .catch((error) => error);
  }, []);

  // SLIDER IMAGES
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBZgpadvnLQBPqEzSM5yQ32yOUqH5tGtEFKpGIiqQ8ReSGPQHn-N8XvxAjHoZ9lBFu_g&usqp=CAU",
    "http://www.imgcomfort.com/no/-/media/corporatesite/socialshareimages/img-logo1200x600.jpg",
  ];

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
