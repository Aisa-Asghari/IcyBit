import React from "react";
import play from "../images/play.svg";
import heart from "../images/Heart.svg";
import { Link } from "react-router-dom";

const CardGroup = ({ title, state }) => {
  return (
    <div id="cardgroup" className="mt-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 py-2 text-sm-center text-md-start">
            <h2>{title}</h2>
          </div>
          {state.map((song) => (
            <div className="col-md-3 col-sm-12 col-12" key={song.id}>
              <div className="container-play-icon position-relative overflow-hidden w-md-75 w-sm-100 d-flex justify-content-center">
                <img className="rounded-5"
                  src={song.album.image.thumbnail.url}
                  alt={song.album.name.replace("Single", "")}
                />
                <Link
                  to={`music/${song.id}`}
                  className="text-decoration-none position-absolute link-play"
                >
                  <img src={play} alt="play icon" />
                </Link>
                <Link
                  to={`music/${song.id}`}
                  className="text-decoration-none position-absolute link-fav"
                >
                  <img src={heart} alt="heart" />
                </Link>
              </div>
              <h6 className="px-3 pt-2 text-center">
                {song.album.name.replace("Single", "")}
              </h6>
              <h6 className="text-white-50 px-3 text-center">
                {song.album.artists[0].fullName}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
