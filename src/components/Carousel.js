import React, { useState, useEffect } from "react";
import { getSlider } from "../services/api";
import soundWaveR from "../images/soundWaveR.svg";
import soundWaveLW from "../images/soundWaveLW.svg";
import soundWaveLB from "../images/soundWaveLB.svg";
import play from "../images/play.svg";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getSlider();
      setSlider(data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-1 m-0 p-0 d-md-block d-sm-none d-none">
            <img src={soundWaveLB} alt="wave" />
          </div>
          <div className="col-1 m-0 p-0 d-md-block d-sm-none d-none">
            <img src={soundWaveLW} alt="wave" />
          </div>
          <div className="col-md-6 col-sm-12 col-6 m-0 p-0">
            <div
              id="carouselExampleControls"
              className="carousel slide mx-auto w-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                {slider.map((s, i) => (
                  <div
                    key={s.id}
                    className={
                      i === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img
                      src={s.image.slider.url}
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption">
                      <button className="justify-content-between">
                        <Link
                          to={`music/${s.id}`}
                          className="text-decoration-none"
                        >
                          Listen now
                        </Link>
                        <img src={play} alt="play" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev d-md-block d-sm-none d-none"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next d-md-block d-sm-none d-none"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-2 m-0 p-0 d-md-block d-sm-none d-none">
            <img src={soundWaveR} alt="wave" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
