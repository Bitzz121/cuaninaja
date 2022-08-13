import React from 'react';
import { Link } from 'react-router-dom';
import '.././Components/Signup.css';

const SignUP = () => {
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
          <div className="input__wrapper">
            <label className="password__label">Set Password:</label>
            <input type="password" placeholder="Password" className="password__input"></input>
          </div>
        </div>
        <div className="button__wrapper">
          <button className="signup submit__button"> Sign Up</button>
        </div>
      </form>
      <div className="signin-link__wrapper">
        <p>Was have account?</p>
        <Link style={{ background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))', WebkitBackgroundClip: 'text', color: 'transparent' }} to="/sign/signin">
          SignIn
        </Link>
      </div>
    </section>
  );
};

export default SignUP;
