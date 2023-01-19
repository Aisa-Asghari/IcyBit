import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import playMusic from "../images/playMusic.svg";
import pauseMusic from "../images/pause.svg";
import download from "../images/download.svg";
import share from "../images/share.svg";
import loop from "../images/loop.svg";
import previousSong from "../images/previousSong.svg";
import nextSong from "../images/nextSong.svg";
import shuffle from "../images/shuffle.svg";
import date from "../images/date.svg";
import dl from "../images/dl.svg";
import axios from "axios";
import moment from "jalali-moment";

const Music = () => {
  const params = useParams();

  const [song, setSong] = useState([]);

  const audioElm = useRef(null);
  const clickRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [openDownlod, setOpenDownlod] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      await axios
        .get(`https://api-beta.melobit.com/v1/song/${params.id}`)
        .then((response) => {
          setSong(response.data);
        });
    };
    fetchAPI();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isPlaying && audioElm.current) {
      audioElm.current.play();
    } else if (audioElm.current) {
      audioElm.current.pause();
    }
  });

  const clickHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const onPlaying = () => {
    const duration = audioElm.current.duration;
    const currentTime = audioElm.current.currentTime;
    setSong({
      ...song,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    audioElm.current.currentTime = (divProgress / 100) * song.length;
  };

  return (
    <div id="details" className="container-fluid mt-2">
      <div className="row justify-content-center">
        <div className="col-10 bg-blur mt-5 d-md-block d-sm-none d-none">
          {song.image && (
            <img
              className="w-100 h-100"
              src={song.image.slider.url}
              alt="slider"
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 col-sm-11 col-11 order-md-1 order-sm-3 order-3 mt-md-0 mt-sm-5 mt-5 text-md-end text-sm-center text-center">
          {song.lyrics &&
            song.lyrics.split("\n").map((text, i) => (
              <p key={i} dir="rtl" className="p-0 m-0">
                {text}
              </p>
            ))}
        </div>
        <div className="col-md-3 col-sm-9 col-9 order-md-2 order-sm-2 order-2 text-center">
          <div className="row justify-content-between">
            <div className="col-6">
              <button onClick={() => setOpenDownlod(true)}>
                download &nbsp; <img src={download} alt="download icon" />
              </button>
              {openDownlod && song.audio && (
                <div className="downlod-high-medium mt-2">
                  <button>
                    <a
                      className="text-decoration-none"
                      href={song.audio.medium.url}
                      download
                    >
                      with 128 quality
                    </a>
                  </button>
                  <button className="mt-1">
                    <a
                      className="text-decoration-none"
                      href={song.audio.high.url}
                      download
                    >
                      with 320 quality
                    </a>
                  </button>
                </div>
              )}
            </div>
            <div className="col-6">
              <button onClick={() => setOpenDownlod(true)}>
                share &nbsp; <img src={share} alt="share icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-11 col-11 order-md-3 order-sm-1 order-1 text-center">
          <div className="top-cart position-relative">
            {song.album && (
              <img src={song.album.image.cover.url} alt={song.title} />
            )}
          </div>
          <div className="bottom-cart text-left py-2 position-relative">
            {song.artists && (
              <h6 className="text-left pt-3">{song.artists[0].fullName}</h6>
            )}
            <h6 className="text-left text-white-50">{song.title}</h6>
            {showProgress && (
              <div
                className="progressbar-div mt-3"
                onClick={checkWidth}
                ref={clickRef}
              >
                <div
                  className="progress-div"
                  style={{ width: `${song.progress}%` }}
                ></div>
                <div className="row pt-3 justify-content-between duration-ct">
                  {audioElm.current && (
                    <>
                      <div className="col-5 text-light fw-bold text-start">
                        {audioElm.current.currentTime.toFixed(0)}s
                      </div>
                      <div className="col-5 text-light fw-bold text-end">
                        {!isNaN(audioElm.current.duration.toFixed(0)) &&
                          `${audioElm.current.duration.toFixed(0)}s`}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="play text-center mt-5 mb-5">
              <img src={loop} alt="loop" />
              <img src={previousSong} alt="previous" />
              <button className="btn-play-pause p-0 m-0" onClick={clickHandler}>
                {isPlaying ? (
                  <img src={pauseMusic} alt="pause" />
                ) : (
                  <img
                    src={playMusic}
                    alt="play"
                    onClick={() => setShowProgress(true)}
                  />
                )}
              </button>
              <img src={nextSong} alt="next" />
              <img src={shuffle} alt="shuffle" />
              {song.audio && (
                <audio
                  co
                  src={song.audio.medium.url}
                  ref={audioElm}
                  onTimeUpdate={onPlaying}
                ></audio>
              )}
            </div>
          </div>
          <div className="info position-relative">
            <div className="row justify-content-between">
              <div className="col-6">
                <img src={date} alt="date" />
                <span>
                  {moment(song.releaseDate)
                    .locale("fa")
                    .format("YYYY/M/D")}
                </span>
              </div>
              <div className="col-6">
                <img src={dl} alt="dl" />
                <span>{song.downloadCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
