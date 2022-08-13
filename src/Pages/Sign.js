import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../Styles/Sign.css';

const Signin = () => {
  return (
    <section className="sign__section">
      <div className="sign__container">
        <div style={{ padding: '1rem' }} className="sign__wrapper">
          <div className="menu__wrapper">
            <div className="signin__wrapper">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))',
                        padding: '0.5rem 3rem',
                      }
                    : { backgroundImage: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))', padding: '0.5rem 3rem', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: ' 400' }
                }
                to="/sign/signin"
              >
                Sign In
              </NavLink>
            </div>
            <div className="signup__wrapper">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))',
                        padding: '0.5rem 3rem',
                      }
                    : { backgroundImage: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))', padding: '0.5rem 3rem', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: ' 400' }
                }
                to="/sign/signup"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
          <div className="content__wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
