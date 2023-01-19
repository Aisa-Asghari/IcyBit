import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../images/logo.png";
import search from "../images/search.svg";
import arrow from "../images/arrow.svg";
import usa from "../images/usa.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container mt-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-2 col-sm-4 col-6 ">
            <h1 className="fs-sm-1 fs-1">
              {" "}
              <img src={logo} alt="logo icon" /> IcyBit{" "}
            </h1>
          </div>
          <div className="col-md-6 col-sm-8 col-6 text-md-center text-sm-end text-end">
            <nav>
              <ul className="m-0 p-0">
                <li className="homeTab d-inline-block mx-md-2 ms-sm-2 ms-3">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="d-inline-block mx-md-2 ms-sm-2 ms-2">
                  <a className="text-decoration-none" href="/">
                    Playlist
                  </a>
                </li>
                <li className="d-inline-block mx-md-2 ms-sm-2 ms-2">
                  <a className="text-decoration-none" href="/">
                    Favorite
                  </a>
                </li>
                <li className="d-inline-block mx-md-2 ms-sm-2 ms-2">
                  <a className="text-decoration-none" href="/">
                    History
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="col-md-2 col-sm-6 col-6 text-end order-md-3 order-sm-4 order-4"
            dir="rtl"
          >
            <Link to="/search" className="text-decoration-none ">
              <div
                id="searchDiv"
                className="d-flex align-items-center justify-content-between"
              >
                <img src={search} alt="search" />{" "}
                <span dir="ltr">Search...</span>{" "}
              </div>{" "}
            </Link>
          </div>
          <div
            className="col-1 order-md-4 order-sm-3 order-3 d-md-block d-sm-none d-none"
            dir="rtl"
          >
            <img src={arrow} alt="arrow" /> <img src={usa} alt="usa" />
          </div>
          <div className="col-md-1 col-sm-6 col-6 text-end order-md-5 order-sm-4 order-4">
            <button>login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
