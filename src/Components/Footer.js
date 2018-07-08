import React from "react";

const footerStyle = {
  position: "fixed",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  padding: "5px",
  textAlign: "center"
};

const Footer = () => (
  <footer style={footerStyle}>
    <span>
      Copyright © 2018{" "}
      <a
        class="text-green"
        href="https://www.WorkForceTechies.com/"
        target="_blank"
      >
        WorkForce Techies
      </a>. All rights reserved.
    </span>
  </footer>
);

export default Footer;
