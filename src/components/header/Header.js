import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import briefcase from "../../assets/images/briefcase.svg";
import userImage from "../../assets/images/user.svg";
import "./header.css";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/sign-in");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Travel App
        </NavLink>
        {pathname !== "/sign-in" && pathname !== "/sign-up" ? (
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <NavLink to="/bookings" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img src={briefcase} alt=" icon" />
                </NavLink>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex="0">
                  <span className="visually-hidden">Profile</span>
                  <img src={userImage} alt="profile icon" />
                  <ul className="profile-nav__list">
                    <li className="profile-nav__item profile-nav__username">John Doe</li>
                    <li className="profile-nav__item">
                      <button className="profile-nav__sign-out button" onClick={signOut}>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
};
