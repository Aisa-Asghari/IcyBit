import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import search from "../images/search.svg";

const Search = () => {
  const [searchInput, setSearch] = useState("");
  const [searchResult, setsearchResult] = useState([]);

  const saveSearchHandeler = (event) => {
    setSearch(event.target.value);
  };

  const searchHandler = async () => {
    await axios
      .get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/10`)
      .then((response) => {
        setsearchResult(response.data.results);
      });
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-sm-11 col-11">
          <div
            id="boxSearch"
            className="w-100 d-flex justify-content-between align-items-center"
          >
            <input
              type="text"
              className="px-3"
              placeholder="type here to search"
              value={searchInput}
              onChange={saveSearchHandeler}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  searchHandler();
                }
              }}
            />
            <img
              src={search}
              alt="search icon"
              className="mx-3"
              onClick={searchHandler}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {searchResult.map(
          (s) =>
            s.type === "song" && (
              <div
                className="col-md-4 col-sm-6 text-center mt-4 bg-blur"
                key={s.position}
              >
                <div id="resultcard" className="d-flex align-items-center">
                  <div className="col-md-4 col-sm-6">
                    <Link
                      to={`music/${s.song.id}`}
                      aria-label="Close"
                      className="text-decoration-none"
                    >
                      <img
                        src={s.song.album.image.thumbnail.url}
                        alt={s.song.album.name.replace("Single", "")}
                      />
                    </Link>
                  </div>
                  <div className="col-md-8 col-sm-6 info">
                    <Link
                      to={`music/${s.song.id}`}
                      aria-label="Close"
                      className="text-decoration-none"
                    >
                      <h6>{s.song.album.name.replace("Single", "")}</h6>
                      <h6 className="text-white-50">
                        {s.song.album.artists[0].fullName}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Search;
