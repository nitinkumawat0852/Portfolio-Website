import React from "react";
import "./Services.css";
import theme_parrten from "../../Assets/about.svg";
import ServicesData from "../../Assets/ServicesData.js";
import arrow from '../../Assets/arrow.svg'
function Services() {
  return (
    <div id="services" className="servies">
      <div className="servies-title">
        <h1>My Services</h1>
        <img src={theme_parrten} />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
