import React from 'react';
import '../Components/Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <section className="form__section">
      <form className="form__group">
        <div className="form__content">
          <div className="input__wrapper">
            <label className="email__label">Email :</label>
            <input placeholder="Email" className="email__input"></input>
          </div>
          <div className="input__wrapper">
            <label className="password__label">Password :</label>
            <input type="password" placeholder="Password" className="password__input"></input>
          </div>
        </div>
        <div className="button__wrapper">
          <button className="signin submit__button"> Sign In</button>
        </div>
      </form>
      <div className="forgot__password">
        <p>Forgot Your Password?</p>
        <Link style={{ background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', color: 'transparent' }} to="/sign/forgotpassword">
          Reset
        </Link>
      </div>
    </section>
  );
};

export default Signin;
