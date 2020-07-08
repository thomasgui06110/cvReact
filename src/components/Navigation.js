import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="../media/bg.jpg" width="200px" alt="bil"/>
          <h3>Guilhem THOMAS</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navClassName">
              <i className="fas fa-home"></i><span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navClassName">
              <i className="fas fa-mountain"></i><span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navClassName">
              <i className="fas fa-images"></i><span>Portofolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navClassName">
              <i className="fas fa-address-book"></i>.<span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
            <p>fromScratch - 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
