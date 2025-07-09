import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`Rs.{menu === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`Rs.{menu === "menu" ? "active" : ""}`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mob-app")}
          className={`Rs.{menu === "mob-app" ? "active" : ""}`}
        >
          About Us
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`Rs.{menu === "contact" ? "active" : ""}`}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <Link to="/cart" className="navbar-search-icon">
          <FaCartShopping className="navbar-cart-icon" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <FaUser className="navbar-profile-icon" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                {" "}
                <MdOutlineShoppingBag className="navbar-order-icon" />{" "}
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                {" "}
                <HiOutlineLogout className="navbar-logout-icon" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
