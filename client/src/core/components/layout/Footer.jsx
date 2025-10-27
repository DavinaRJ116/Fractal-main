import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      © Fractal {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
