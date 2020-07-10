import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bordeaux</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0611524479">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 11 52 44 79
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>

              <CopyToClipboard text="guilhem.thomas@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Mail copié !");
                  }}
                >
                  guilhem.thomas@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="google.fr" target="_blank" rel="noopener noreferrer">
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
