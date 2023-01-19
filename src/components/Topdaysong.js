import React, { useState, useEffect } from "react";
import { getTopDaySong } from "../services/api";
import CardGroup from "./CardGroup";

const Topdaysong = () => {
  const [topDaySong, setTopDaySong] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getTopDaySong();
      setTopDaySong(data);
    };
    fetchAPI();
  }, []);
  
  return (
    <div>
      <CardGroup title="Top Songs of Today" state={topDaySong} />
    </div>
  );
};

export default Topdaysong;
