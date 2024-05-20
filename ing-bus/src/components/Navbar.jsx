import React from "react";
import logo from "../assets/ing-logo-rectangular.jpg";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      backgroundColor: "#ffffff",
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
    },
  };

  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src={logo} alt="ing-logo" style={styles.logo} />
      </div>
      <div className="navbar-title">ING BUS</div>
      <div style={styles.buttons}>
        <button style={styles.button}>Placeholder 1</button>
        <button style={styles.button}>Placeholder 2</button>
      </div>
    </nav>
  );
};

export default Navbar;
