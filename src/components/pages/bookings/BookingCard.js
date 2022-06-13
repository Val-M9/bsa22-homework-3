import React from "react";

const BookingCard = ({ id, guestsAmount, price, title, planDate, deleteOrder }) => {
  const date = planDate.split("T")[0].replaceAll("-", ".");

  return (
    <div className="booking">
      <h3 className="booking__title">{title}</h3>
      <span className="booking__guests">{guestsAmount} guests</span>
      <span className="booking__date">{date}</span>
      <span className="booking__total">{price} $</span>
      <button className="booking__cancel" title="Cancel booking" onClick={() => deleteOrder(id)}>
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </div>
  );
};

export default BookingCard;
