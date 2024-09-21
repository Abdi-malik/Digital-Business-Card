import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x " icon={faSquare} />
          <FontAwesomeIcon
            className="fa-stack-1x fa-inverse fontAwesome"
            icon={faTwitter}
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x " icon={faSquare} />
          <FontAwesomeIcon
            className="fa-stack-1x fa-inverse fontAwesome"
            icon={faFacebook}
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x " icon={faSquare} />
          <FontAwesomeIcon
            className="fa-stack-1x fa-inverse fontAwesome"
            icon={faInstagram}
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x " icon={faSquare} />
          <FontAwesomeIcon
            className="fa-stack-1x fa-inverse fontAwesome"
            icon={faLinkedin}
          />
        </span>
      </a>
      <a href="#">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon className="fa-stack-2x " icon={faSquare} />
          <FontAwesomeIcon
            className="fa-stack-1x fa-inverse fontAwesome"
            icon={faGithub}
          />
        </span>
      </a>
    </div>
  );
}
