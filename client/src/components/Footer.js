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
          Melissa Mayfield &emsp;|&emsp; Morgan Gilbert &emsp;|&emsp; Christina
          DuWors &emsp;|&emsp; Rodolfo Ramos &emsp;|&emsp;{" "}
          <a
            className=" text-dark text-decoration-none"
            href="https://bnk5532.github.io/BNK-Port-v2/"
            target="_blank"
            rel="noreferrer"
          >
            Brian King
          </a>
        </strong>
        <div>
          &copy; 2022, <em>Player-Up!</em>
        </div>
      </div>
    </div>
  );
};

export default Footer;
