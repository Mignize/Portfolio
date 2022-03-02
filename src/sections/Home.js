import React from 'react';
import "../css/Home.css";
import profile from '../files/images/Mignize.webp';

const Home = () => {
  return (
    <>
    <div className="background"></div>
    <div className="row text-center" data-aos="fade-up" data-aos-duration="1500">
      <div className="col-lg-4 pb-4 pe-4">
         <img className="profile img-fluid" src={profile} alt=""></img>
      </div>
      <div className="col-lg-8">
        <span className="description-home">Hi!</span>
        <h1 className="presentation">I'm Santiago Salazar</h1>
        <span className="description-home">Full stack developer</span>
      </div>
      </div>
    </>
  );
};

export default Home;