// This component defines the navigation bar for the application, including the logo, title, and buttons for Admin and About overlays.

import React from "react";
import logo from "../assets/ing-logo-rectangular.jpg";

// Navbar component definition
// Props:
// - toggleOverlay: function to toggle the overlay content
// - adminContent: content to be shown when Admin button is clicked
// - aboutContent: content to be shown when About button is clicked
const Navbar = ({ toggleOverlay, adminContent, aboutContent }) => {
  // Inline styles for the Navbar component
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 20px",
      marginTop: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      width: "96%",
    },
    logo: {
      width: "200px",
      height: "90px",
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#ff5e36",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    },
    title: {
      fontSize: "48px",
      color: "black",
      fontWeight: "bold",
      textTransform: "uppercase",
      fontFamily: "Arial, sans-serif",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo section */}
      <div className="navbar-logo">
        <img src={logo} alt="ing-logo" style={styles.logo} />
      </div>

      {/* Title section */}
      <div style={styles.title}>ING BUS</div>

      {/* Buttons section */}
      <div style={styles.buttons}>
        {/* Admin button */}
        <button
          style={styles.button}
          onClick={() => toggleOverlay(adminContent)}
        >
          Admin
        </button>

        {/* About button */}
        <button
          style={styles.button}
          onClick={() => toggleOverlay(aboutContent)}
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
