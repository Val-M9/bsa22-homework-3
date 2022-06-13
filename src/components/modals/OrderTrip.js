import { useState } from "react";

const OrderTrip = ({ showModal, closeModal, title, duration, level, price }) => {
  const [guestsNumber, setGuestsNumber] = useState(1);
  const date = new Date().toISOString().split("T")[0];

  const onGuestsChange = (e) => {
    setGuestsNumber(e.target.value);
  };
  const totalPrice = guestsNumber * price;

  return (
    <div hidden={showModal}>
      <div className="modal">
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={() => closeModal()}>
            ×
          </button>
          <form className="trip-popup__form" autoComplete="off">
            <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{duration}</strong> days
                </span>
                <span className="trip-info__level">{level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input name="date" type="date" required min={date} />
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input
                name="guests"
                type="number"
                min="1"
                max="10"
                value={guestsNumber}
                onChange={onGuestsChange}
                required
              />
            </label>
            <span className="trip-popup__total">
              Total: <output className="trip-popup__total-value">{totalPrice}$</output>
            </span>
            <button className="button" type="submit">
              Book a trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderTrip;
