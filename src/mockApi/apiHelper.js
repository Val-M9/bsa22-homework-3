import { bookings } from "./bookings";
import { trips } from "./trips";

export const callApi = {
  async getBookings(endpoint) {
    const response = endpoint === "bookings" ? bookings : "";
    return new Promise((resolve, reject) => {
      setTimeout(() => (response ? resolve(response) : reject(Error("Faild to load"))), 500);
    });
  },

  async getTrips(endpoint) {
    const response = endpoint === "trips" ? trips : "";
    return new Promise((resolve, reject) => {
      setTimeout(() => (response ? resolve(response) : reject(Error("Faild to load"))), 500);
    });
  },

  getTripById(id) {
    return trips.filter((trip) => trip.id === id);
  },
};
