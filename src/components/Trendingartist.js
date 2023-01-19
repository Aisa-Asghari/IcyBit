import React, { useState, useEffect } from "react";
import { getTrendingArtist } from "../services/api";

const Trendingartist = () => {
  const [trendingArtists, setTrendingArtist] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getTrendingArtist();
      setTrendingArtist(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="mt-3 py-3 trendingArtist">
        <div className="container">
          <div className="row">
            <div className="col-12 text-sm-center text-md-start">
              <h2 className="d-inline">Top Trending </h2>{" "}
              <h1 className="d-inline Artists">Artists</h1>
            </div>
            {trendingArtists.map((a) => (
              <div className="col-md-3 col-sm-6 col-6 text-center" key={a.id}>
                <img
                  src={a.image.thumbnail.url}
                  alt={a.fullName}
                  className="w-100 mt-3"
                />
                <div className="mt-3 mb-5">
                  <h6 className="d-inline">{a.fullName}</h6>
                  <h6 className="d-inline text-white-50 d-none d-md-block d-sm-block">
                    {a.sumSongsDownloadsCount}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingartist;
