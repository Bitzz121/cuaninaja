import React from 'react';
import '../Styles/Home.css';
import img1 from '../Images/img1.png';
import Services1 from '../Images/affiliate.png';
import Services2 from '../Images/money.png';
import Services3 from '../Images/job-search.png';
import Footer from '../Components/footer';

const Home = () => {
  return (
    <>
      <section className="home" style={{ height: '100vh' }}>
        <div className="home__container">
          <div className="home__content">
            <h1>We Help You To Make Money</h1>
            <p>we want to help you about how to make money on the internet</p>
            <button className="more__button">More Information</button>
          </div>
        </div>
      </section>
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className="info__container">
          <div className="card__wrapper">
            <div className="card">
              <h1>10.312</h1>
              <h4>USER</h4>
              <p>Total Users</p>
            </div>
            <div className="card">
              <h1>1.412</h1>
              <h4>USD</h4>
              <p>Total Income</p>
            </div>
            <div className="card">
              <h1>134</h1>
              <h4>CONTENT</h4>
              <p>Total Content</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about__container">
          <div className="box">
            <img className="img__about" src={img1} alt="particle"></img>
          </div>
          <div className="box">
            <div className="box__content">
              <h1>We Help You To Make Money</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="more__button">More Information</button>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="services-title">
          <h1>SERVICES</h1>
          <p>What We Do</p>
        </div>
        <div className="services-container">
          <div className="services-wrapper">
            <div className="services-icon-wrapper">
              <img width={'150px'} src={Services1} alt="icon 1" />
            </div>
            <div className="services-title-wrapper">
              <h2>Affiliate</h2>
            </div>
            <div className="services-description-wrapper">
              <p>We provide many affiliate systems so you can make more money.</p>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="services-icon-wrapper">
              <img width={'150px'} src={Services2} alt="icon 1" />
            </div>
            <div className="services-title-wrapper">
              <h2>Make Money</h2>
            </div>
            <div className="services-description-wrapper">
              <p>We help you to make money from your fashion or skills.</p>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="services-icon-wrapper">
              <img width={'150px'} src={Services3} alt="icon 1" />
            </div>
            <div className="services-title-wrapper">
              <h2>Job Search</h2>
            </div>
            <div className="services-description-wrapper">
              <p>We help you all to find a job that matches your skills.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
