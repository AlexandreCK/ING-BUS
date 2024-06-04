import React from "react";
import logo from "../assets/ing-logo-rectangular.jpg";

const Navbar = ({ toggleOverlay, adminContent, aboutContent }) => {
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
      fontfamily: "Arial, sans-serif",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src={logo} alt="ing-logo" style={styles.logo} />
      </div>
      <div style={styles.title}>ING BUS</div>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => toggleOverlay(adminContent)}>Admin</button>
        <button style={styles.button} onClick={() => toggleOverlay(aboutContent)}>About</button>
      </div>
    </nav>
  );
}
export default Navbar;


