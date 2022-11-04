import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper p-4">
      <div className="footer-links">
        <p>
          <a className="p-3" href="mailto:contact@playerup.com">
            <i className="fa-solid fa-envelope footer-links" aria-hidden="true"></i>
          </a>

          <a
            className="p-3"
            href="https://github.com/Mayfieldmel/player-up"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github is-size-5" aria-hidden="true"></i>
          </a>

          <a className="p-3" href="tel:+1-910-123-4567">
            <i className="fa-solid fa-mobile-button" aria-hidden="true"></i>
          </a>
        </p>
      </div>
      <div className="footer-text">
        <strong>&copy; 2022. Melissa Mayfield, Morgan Gilbert, Christina DuWors, Rodolfo Ramos & Brian King.</strong>
      </div>
    </div>
  );
};

export default Footer;
