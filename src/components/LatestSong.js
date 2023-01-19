import React, { useState, useEffect } from "react";
import { getLatestSong } from "../services/api";
import CardGroup from "./CardGroup";

const LatestSong = () => {
  const [newSongs, setNewSongs] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getLatestSong();
      setNewSongs(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <CardGroup title="New Songs" state={newSongs} />
    </div>
  );
};

export default LatestSong;
