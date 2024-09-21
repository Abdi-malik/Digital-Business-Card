import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Button() {
  return (
    <a href="mailto:abdimalikodowaa@gmail.com" className="btn">
      <FontAwesomeIcon icon={faEnvelope} /> Email{" "}
    </a>
  );
}
