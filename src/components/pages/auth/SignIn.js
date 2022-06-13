import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off">
        <h2 className="sign-in-form__title">Sign In</h2>
        <label className="trip-popup__input input">
          <span className="input__heading">Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="trip-popup__input input">
          <span className="input__heading">Password</span>
          <input name="password" type="password" autoComplete="new-password" required />
        </label>
        <button className="button" type="submit" onClick={handleSubmit}>
          Sign In
        </button>
      </form>
      <span>
        Already have an account?
        <NavLink to="/sign-up" className="sign-in-form__link">
          Sign Up
        </NavLink>
      </span>
    </main>
  );
};

export default SignIn;
