import React from "react";
import Carousel from "./Carousel";
import LatestSong from "./LatestSong";
import Trendingartist from "./Trendingartist";
import Topdaysong from "./Topdaysong";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestSong />
      <Trendingartist />
      <Topdaysong />
    </div>
  );
};

export default Home;
