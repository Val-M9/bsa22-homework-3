import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { routes } from "./constants/routes";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, Component }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<React.Fragment>{Component ? <Component /> : null}</React.Fragment>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
