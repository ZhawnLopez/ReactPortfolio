import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import catImg from "../assets/images/cat.png";


export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top`}
      style={{ height: "64px" }}   
    >
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
         <img
           src={catImg}
           alt="Cat logo"
           className="navbar-cat"
          />
         <span className="rainbow-text">Cat image gif fire emoji 🔥</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/others">
                Others
              </NavLink>
            </li>

            <li className="nav-item">
              <button
                className={`btn btn-sm ${
                  darkMode ? "btn-light" : "btn-dark"
                }`}
                onClick={toggleDarkMode}
              >
                {darkMode ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
