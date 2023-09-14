import React from "react";
import "../Header/navbar-module.css";
import { Link } from "react-router-dom";
import logo from "../../Asset/Image/sim2.png";
import MobileMenu from "./Mobile-menu";
const menu = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "About",
    slug: "/",
  },
  {
    title: "Services",
    slug: "/",
  },
  {
    title: "Gallery",
    slug: "/",
  },
  {
    title: "Contact",
    slug: "/",
  },
];
const Navbar = () => {
  return (
    <>
      <header className="position-fixed bg-white">
        <div className="container">
          <div className="header1 container">
            <Link to="/">
              <img src={logo} alt="" className="img-fluid logo" />
            </Link>
            <ul className="nav_menu fw-bold">
              {menu.map((item) => {
                return (
                  <li key={item.title}>
                    <Link to={item.slug}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
      <MobileMenu menu={menu} />
    </>
  );
};

export default Navbar;
