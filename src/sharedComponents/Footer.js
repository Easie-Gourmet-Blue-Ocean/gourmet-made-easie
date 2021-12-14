import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="logo">
        <Link to="/">
          <h3>Gourmet Made Easy</h3>
        </Link>
      </div>
        <ul className="contributors">
        <li>Sam Martin</li>
        <li>Patrick Lorden</li>
        <li>Matthew Zipkes</li>
        <li>Alex Ni</li>
        </ul>
        <hr className="divider"></hr>
        <ul className="socials">
            <li><FontAwesomeIcon className="icon" icon={faFacebook} size="1x"/></li>
            <li><FontAwesomeIcon className="icon" icon={faTwitter} size="1x"/></li>
            <li><FontAwesomeIcon className="icon" icon={faInstagram} size="1x"/></li>
            <li><FontAwesomeIcon className="icon" icon={faPinterest} size="1x"/></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
