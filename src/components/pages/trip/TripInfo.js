import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { callApi } from "../../../mockApi/apiHelper";
import Loader from "../../loader/Loader";
import OrderTrip from "../../modals/OrderTrip";
import "./trip.css";

const TripInfo = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModalVisibility = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const result = callApi.getTripById(id);
    return setTrip(result);
  }, [id]);

  return (
    <main className="trip-page">
      <h1 className="visually-hidden">Travel App</h1>
      {trip ? (
        trip.map((info) => (
          <div className="trip" key={info.id}>
            <img src={info.image} className="trip__img" alt="trip" />
            <div className="trip__content">
              <div className="trip-info">
                <h3 className="trip-info__title">{info.title}</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration">
                    <strong>{info.duration}</strong> days
                  </span>
                  <span className="trip-info__level">{info.level}</span>
                </div>
              </div>
              <div className="trip__description">{info.description}</div>
              <div className="trip-price">
                <span>Price</span>
                <strong className="trip-price__value">{info.price} $</strong>
              </div>
              <button className="trip__button button" onClick={toggleModalVisibility}>
                Book a trip
              </button>
            </div>
            {showModal && (
              <OrderTrip
                closeModal={toggleModalVisibility}
                duration={info.duration}
                title={info.title}
                level={info.level}
                price={info.price}
              />
            )}
          </div>
        ))
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default TripInfo;
