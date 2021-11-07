import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://images3.alphacoders.com/882/thumb-1920-882548.jpg")`,
        backgroundPosition: "center center",
      }}
    ></header>
  );
}

export default Banner;
