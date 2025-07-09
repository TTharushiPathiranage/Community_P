import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Liyanage Bake House in Pambahinna is your friendly neighborhood bakery, serving fresh bread, tasty short eats, and delicious cakes every day. Loved for its quality, affordable prices, and warm service, it’s the perfect stop for a quick snack or a sweet treat
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>072 601 1837</li>
            <li>Samanala Wewa Rd, 70100</li>
            <li>
              Hours: <br />
              Weekdays 7 AM–7 PM <br />
              Thursday (Asalha Puja) 7:30 AM–7 PM
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © liyanagebakehouse.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
