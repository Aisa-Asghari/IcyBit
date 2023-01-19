import React, { useState, useEffect } from "react";
import { getTopWeekSong } from "../services/api";
import CardGroup from "./CardGroup";

const Topweeksong = () => {
  const [topWeekSong, setTopWeekSong] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getTopWeekSong();
      setTopWeekSong(data);
    };
    fetchAPI();
  }, []);
  
  return (
    <div>
      <CardGroup title="Top Songs Of This Week" state={topWeekSong} />
    </div>
  );
};

export default Topweeksong;
