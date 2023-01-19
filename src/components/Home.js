import React from "react";
import Carousel from "./Carousel";
import LatestSong from "./LatestSong";
import Trendingartist from "./Trendingartist";
import Topdaysong from "./Topdaysong";
import Topweeksong from "./Topweeksong";

const Home = () => {
  return (
    <div>
      <Carousel />
      <LatestSong />
      <Trendingartist />
      <Topdaysong />
      <Topweeksong />
    </div>
  );
};

export default Home;
