import { lazy } from "react";

const Main = lazy(() => import("../components/pages/main/Main"));
const SignUp = lazy(() => import("../components/pages/auth/SignUp"));
const SignIn = lazy(() => import("../components/pages/auth/SignIn"));
const TripInfo = lazy(() => import("../components/pages/trip/TripInfo"));
const Bookings = lazy(() => import("../components/pages/bookings/Bookings"));

export const routes = [
  { Component: Main, path: "/" },
  { Component: SignUp, path: "/sign-up" },
  { Component: SignIn, path: "/sign-in" },
  { Component: TripInfo, path: "/trip/:id" },
  { Component: Bookings, path: "/bookings" },
  { Component: Main, path: "*" },
];
