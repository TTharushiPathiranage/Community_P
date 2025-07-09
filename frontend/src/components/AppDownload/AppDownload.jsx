import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import logo from "../../assets/logo.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <div className="app-download-wrapper">
        <div className="app-download-img">
          <img src={logo} alt="" />
        </div>
        <div className="app-download-content">
          <h2>About Liyanage Bake House</h2>
          <p>
            Liyanage Bake House is a trusted bakery located in the heart of
            Pabahinna, serving fresh and flavorful baked goods every day. From
            soft breads and sweet pastries to savory snacks and beverages, we
            pride ourselves on quality, taste, and friendly service. Whether
            you're a regular or just passing through, we’re here to make your
            day a little more delicious.
          </p>
        </div>

        <div className="app-download-content">
          <h3>Our Vision</h3>
          <p>
            To be the most loved local bakery in the region, known for quality,
            freshness, and a welcoming experience that brings people together.
          </p>
        </div>

        <div className="app-download-content">
          <h3>Our Mission</h3>
          <p>
            To deliver delicious, freshly made baked goods and snacks with
            consistency, care, and a commitment to excellent service making
            every customer feel at home, every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
