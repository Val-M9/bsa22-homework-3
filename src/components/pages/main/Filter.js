import { useEffect } from "react";

export const Filter = ({ filterByDuration, filterByLevel, filterByTitle }) => {
  return (
    <section className="trips-filter">
      <h2 className="visually-hidden">Trips filter</h2>
      <form className="trips-filter__form" autoComplete="off">
        <label className="trips-filter__search input">
          <span className="visually-hidden">Search by name</span>
          <input
            name="search"
            type="search"
            placeholder="search by title"
            onChange={filterByTitle}
          />
        </label>
        <label className="select">
          <span className="visually-hidden">Search by duration</span>
          <select name="duration" onChange={filterByDuration}>
            <option value="">duration</option>
            <option value="0_x_5">&lt; 5 days</option>
            <option value="5_x_10">&lt; 10 days</option>
            <option value="10_x_">&ge; 10 days</option>
          </select>
        </label>
        <label className="select">
          <span className="visually-hidden">Search by level</span>
          <select name="level" onChange={filterByLevel}>
            <option value="">level</option>
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="difficult">difficult</option>
          </select>
        </label>
      </form>
    </section>
  );
};
