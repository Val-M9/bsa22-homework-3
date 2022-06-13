import { useEffect, useState } from "react";
import { callApi } from "../../../mockApi/apiHelper";
import BookingCard from "./BookingCard";
import "./bookings.css";

const Bookings = () => {
  const [bookings, setBookings] = useState("");

  useEffect(() => {
    const result = async () => {
      const response = await callApi.getBookings("bookings");
      setBookings(response);
    };
    result();
  }, []);

  const deleteOrder = (id) => {
    let orders = bookings.filter((booking) => booking.id !== id);
    setBookings(orders);
  };

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings &&
          bookings
            .sort((a, b) => (a.date > b.date ? 1 : -1))
            .map((booking) => (
              <BookingCard
                key={booking.tripId}
                id={booking.id}
                guest={booking.guest}
                price={booking.totalPrice}
                title={booking.trip.title}
                planDate={booking.date}
                deleteOrder={deleteOrder}
              />
            ))}
      </ul>
    </main>
  );
};

export default Bookings;
