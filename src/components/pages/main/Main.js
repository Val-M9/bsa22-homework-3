import React, { useState, useEffect } from "react";
import { Filter } from "./Filter";
import TripCard from "../trip/TripCard";
import { callApi } from "../../../mockApi/apiHelper";
import Loader from "../../loader/Loader";
import "./main.css";

const Main = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    const result = async () => {
      const response = await callApi.getTrips("trips");
      setTrips(response);
    };
    result();
  }, []);

  const filterByTitle = (e) => {
    let value = e.target.value.toLowerCase();
    const filterResult = trips.filter((trip) =>
      value ? trip.title.toLowerCase().includes(value) : trips,
    );
    setFilteredTrips(filterResult);
  };

  const filterByDuration = (e) => {
    let value = e.target.value;
    const min = value.split("_")[0];
    const max = value.split("_")[2];
    const filteredResult = trips.filter((trip) => trip.duration >= min && trip.duration <= max);
    setFilteredTrips(filteredResult);
  };

  const filterByLevel = (e) => {
    const filterResult = trips.filter((trip) => trip.level === e.target.value);
    setFilteredTrips(filterResult);
  };

  return (
    <main>
      <h1 className="visually-hidden">Travel App</h1>
      <Filter
        filterByDuration={filterByDuration}
        filterByLevel={filterByLevel}
        filterByTitle={filterByTitle}
      />
      <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {trips.length ? (
            (filteredTrips.length ? filteredTrips : trips).map((trip) => (
              <TripCard
                key={trip.id}
                id={trip.id}
                title={trip.title}
                duration={trip.duration}
                image={trip.image}
                level={trip.level}
                price={trip.price}
              />
            ))
          ) : (
            <Loader />
          )}
        </ul>
      </section>
    </main>
  );
};

export default Main;
