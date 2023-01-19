import axios from "axios";

const getSlider = async () => {
  const response = await axios.get(
    "https://api-beta.melobit.com/v1/song/slider/latest"
  );
  return response.data.results;
};

const getLatestSong = async () => {
  const response = await axios.get(
    "https://api-beta.melobit.com/v1/song/new/4/4"
  );
  return response.data.results;
};

const getTrendingArtist = async () => {
  const response = await axios.get(
    "https://api-beta.melobit.com/v1/artist/trending/0/4"
  );
  return response.data.results;
};

const getTopDaySong = async () => {
  const response = await axios.get(
    "https://api-beta.melobit.com/v1/song/top/day/0/4"
  );
  return response.data.results;
};

const getTopWeekSong = async () => {
  const response = await axios.get(
    "https://api-beta.melobit.com/v1/song/top/week/0/5"
  );
  return response.data.results;
};

export {
  getSlider,
  getLatestSong,
  getTrendingArtist,
  getTopDaySong,
  getTopWeekSong,
};
