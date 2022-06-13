import React from "react";
import { NavLink } from "react-router-dom";

const TripCard = ({ id, title, duration, level, price, image }) => {
  return (
    <div className="trip-card">
      <img src={image} alt="trip to" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{duration}</strong> days
            </span>
            <span className="trip-info__level">{level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{price} $</strong>
        </div>
      </div>
      <NavLink to={`/trip/${id}`} className="button">
        Discover a trip
      </NavLink>
    </div>
  );
};

export default TripCard;
