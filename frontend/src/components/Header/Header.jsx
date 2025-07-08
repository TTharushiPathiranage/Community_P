import React from "react";
import "./Header.css";
import hero_img from "../../assets/hero_img.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h3>ENDLESS DISCOVERY OF DELIOUSS</h3>
        <h2>Baked with Love, Served with a Smile</h2>
        <p>
          Delicious breads, cakes, and pastries made fresh daily using only the
          finest ingredients from Liyanage Backery.
        </p>
        <button>View Menu</button>
      </div>
      <div className="header-image">
        <img src={hero_img} alt="Bakery Items" />
      </div>
    </div>
  );
};

export default Header;
