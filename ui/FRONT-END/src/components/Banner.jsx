import React from "react";

const Banner = ({ services }) => {
  console.log(services,"services")
  return (
    <div className="inner">
      <div className="wrapper">
        <section>
          {services.map(({ title, icon }) => (
            <div className="service-card" key={title}>
              <img src={icon} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </section>
        <section>
          {services.map(({ title, icon }) => (
            <div className="service-card" key={title}>
              <img src={icon} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Banner ;
