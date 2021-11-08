import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images3.alphacoders.com/882/thumb-1920-882548.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Stranger Things</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Stranger Things description will go here!Stranger Things description
          will go here!Stranger Things description will go here!Stranger Things
          description will go here!Stranger Things description will go
          here!Stranger Things description will go here!Stranger Things
          description will go here!Stranger Things description will go
          here!Stranger Things description will go here!`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
