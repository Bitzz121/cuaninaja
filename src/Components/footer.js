import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import '../Components/footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <hr style={{ width: '100%', height: '1px', border: 'none', background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))' }} />
        <div className="footer-wrapper">
          <div className="footer-content-wrapper">
            <div className="footer-content-title">
              <div className="brand">
                <NavLink to="/">
                  Cuanin<span>Aja</span>.ID
                </NavLink>
              </div>
            </div>
            <div className="footer-content-content">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <FaFacebookF size={25} color={'rgb(0, 80, 255)'} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <AiFillInstagram size={25} color={'rgb(0, 80, 255)'} />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/">
                    <AiOutlineTwitter size={25} color={'rgb(0, 80, 255)'} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedln.com/">
                    <FaLinkedinIn size={25} color={'rgb(0, 80, 255)'} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-wrapper">
            <div className="footer-content-title">
              <h2 style={{ color: 'white' }}>Contact Us</h2>
            </div>
            <div className="footer-content-contact">
              <p style={{ color: 'white' }}>Jl.Surga dan Bumi, kec. Cibeureum, Kab. Bandung, no.1101</p>
              <br />
              <p> cuaninaja@gmail.com</p>
            </div>
          </div>
          <div className="footer-content-wrapper">
            <div className="footer-content-title">
              <h2 style={{ color: 'white' }}>Join Us</h2>
            </div>
            <div className="footer-content-contact">
              <p>Daftarkan Email anda untuk mendapatkan informasi lebih lengkap.</p>
              <br />
              <form style={{ display: 'flex', width: '100%', padding: '0.5rem', gap: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
                <input style={{ border: 'none', width: '70%', padding: '5px' }} placeholder="Your Email.."></input>
                <button className="submit">Join</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: '65%', height: '1px', border: 'none', background: 'linear-gradient(to bottom right, var(--primary-color), var(--secondary-color))' }} />
      <div style={{ color: 'white', margin: '1rem', fontSize: '10px', transform: 'translateX(10rem)' }} className="copyright">
        Copyright © 2022 CuaninAja.ID Studio. All right reserved.
      </div>
    </>
  );
};

export default Footer;
