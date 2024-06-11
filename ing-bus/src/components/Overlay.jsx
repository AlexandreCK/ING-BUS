import React from "react";

const Overlay = ({ content, closeOverlay }) => {
  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const contentStyles = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "50%",
    textAlign: "center",
  };

  const buttonStyles = {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#ff5e36",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={overlayStyles}>
      <div style={contentStyles}>
        {content}
        <button style={buttonStyles} onClick={closeOverlay}>Close</button>
      </div>
    </div>
  );
};

export default Overlay;

