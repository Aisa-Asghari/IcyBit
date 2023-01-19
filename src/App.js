import React from "react";
import Home from "./components/Home";
import Music from "./components/Music";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/music/:id" element={<Music />} />
        <Route path="/search/music/:id" element={<Music />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
