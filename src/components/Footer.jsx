// This component defines the footer section of the application, displaying the current year and a copyright notice.

import React from "react";

// Footer component definition
const Footer = () => {
    return (
        <footer>
            <div className="container">
                {/* Display the current year and copyright notice */}
                <p>&copy; {new Date().getFullYear()} ING-BUS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
