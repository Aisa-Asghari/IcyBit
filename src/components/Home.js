import React from "react";
import Carousel from "./Carousel";
import LatestSong from "./LatestSong";
import Trendingartist from "./Trendingartist";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestSong />
      <Trendingartist />
    </div>
  );
};

export default Home;
