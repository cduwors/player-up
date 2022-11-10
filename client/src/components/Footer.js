import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper p-4">
      <div className="footer-links">
        <p>
          <a className="p-3 fs-3" href="mailto:support@playerup.com">
            <i
              className="fa-solid fa-envelope footer-links"
              aria-hidden="true"
            ></i>
          </a>

          <a
            className="p-3 fs-3"
            href="https://github.com/Mayfieldmel/player-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github is-size-5" aria-hidden="true"></i>
          </a>

          <a className="p-3 fs-3" href="tel:+1-910-123-4567">
            <i className="fa-solid fa-mobile-button" aria-hidden="true"></i>
          </a>
        </p>
      </div>

      <div id="footer-text">
        <strong>
          <a
            className=" text-dark text-decoration-none"
            href="https://mayfieldmel.github.io/Mayfield-Portfolio-2.0/"
            target="_blank"
            rel="noreferrer"
          >
            MELISSA MAYFIELD
          </a>
          &emsp;|&emsp;
          <a
            className=" text-dark text-decoration-none"
            href="https://morganegilbert.github.io/react-portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            MORGAN GILBERT
          </a>
          &emsp;|&emsp;
          <a
            className=" text-dark text-decoration-none"
            href="https://cduwors.github.io/React-Portfolio/#portfolio"
            target="_blank"
            rel="noreferrer"
          >
            CHRISTINA DUWORS
          </a>
          &emsp;|&emsp;
          <a
            className=" text-dark text-decoration-none"
            href="https://rramosx11.github.io/react-portfolio/#about"
            target="_blank"
            rel="noreferrer"
          >
            RODOLFO RAMOS
          </a>
          &emsp;|&emsp;{" "}
          <a
            className=" text-dark text-decoration-none"
            href="https://bnk5532.github.io/BNK-Port-v2/"
            target="_blank"
            rel="noreferrer"
          >
            BRIAN KING
          </a>
        </strong>
        <div className="fs-8">
          &copy; 2022, Player-Up! All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
