import React from "react";
import testimony from "../testimony";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-cards">
          {testimony.map((testimony) => (
            <div key={testimony.id} className="testimonials-items">
              <h5>{testimony.name}</h5>
              <img src={require(`../images/${testimony.image}`)} alt="" />
              <div className="testimonials-content">
                <div className="testimonials-info">
                  <p>{testimony.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
