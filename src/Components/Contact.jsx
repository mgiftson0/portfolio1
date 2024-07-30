import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
//import "./Contact.css"; // Import CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <a href="mailto:mgiftson00@gmail.com" className="contact-link">
        <div className="contact-card">
          <div className="card-content">
            <label htmlFor="email">
              <span>
                <FaEnvelope />
                <span className="icon-text">mgiftson00@gmail.com</span>
              </span>
            </label>
          </div>
        </div>
      </a>
      <a href="tel:+233558764881" className="contact-link">
        <div className="contact-card">
          <div className="card-content">
            <label htmlFor="phone">
              <span>
                <FaPhone />
                <span className="icon-text">(233) 55 876 4881</span>
              </span>
            </label>
          </div>
        </div>
      </a>
      <a href="https://maps.google.com/?q=Accra%2C+Ghana" className="contact-link">
        <div className="contact-card">
          <div className="card-content">
            <label htmlFor="location">
              <span>
                <FaMapMarkerAlt />
                <span className="icon-text">Accra, Ghana</span>
              </span>
            </label>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Contact;
