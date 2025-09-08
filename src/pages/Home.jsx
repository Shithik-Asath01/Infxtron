import React, { useEffect } from "react";

import Logo from "../assets/imgs/logo.png";

import "../assets/fonts/font.css";
import "../assets/fonts/nusar.css";

import Button from '../components/Button'
import CountDown from "../components/CountDown";

import Events from "../components/Events";
import Services from "../components/Services";
import Contact from "../components/Contact";
// import ContactStudent from "../components/ContactStudent";

import { META_EVENTS, SPONSERS } from "../utils/constants";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">

      {/* hero-section */}
      <div className="hero" style={{ zIndex: 180, position: "relative" }}>
        <div className="container logo">
          <div className="logo-img">
            <img
              width={620}
              src={Logo}
              alt="Infxtron - A International Level Technical Symposium"
            />
          </div>

          <div className="logo-txt glow" style={{ fontFamily: "Netron" , fontSize: 18}}>
            A International Level Technical Symposium
          </div>
          <div className="glitch-wrapper">
            <div
              className="glitch"
              style={{ margin: "16px 0" }}
              data-glitch="COMING SOON ...."
            >
             COMING SOON ....
            </div>
          </div>
          { <Button className='reg-btn' /> }
          <p style={{ fontSize: 34 }}>10th Oct'25</p>
        </div>
      </div>

      {/* CountDown */}
      <h1 className="count-h">COUNTDOWN</h1>
      <CountDown />

      {/* Tech Evnets */}
      {META_EVENTS.map((data, key) => (
        <div key={key}>
          <h1 className="count-h">{data.title}</h1>
          <p className="count-p">{data.desc}</p>

          <div className="grid-conatiner" style={{ position: "relative" }}>
            {data.events.map((event, index) => (
              <Events
                style={{ position: "realative" }}
                events={event}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Event Details */}
      <p className="count-p" style={{ fontSize: 38, paddingTop: 8 }}>
        Explore Our Awaited Offerings !
      </p>
      <Services />

      {/* Sponsers  */}
      <h1 className="count-h">MANAGED BY</h1>
      <div className="grid-sponsers">
        {SPONSERS.map((sponser, index) => (
          <div className="card" key={index}>
            <img src={sponser.imgURL} width="230" alt={sponser.name} />
          </div>
        ))}
      </div>

      {/* Conatct Info */}
      <h1 className="count-h">CONTACT US</h1>
      <Contact />
    </div>
  );
}

export default Home;
