import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LocationCities from "./components/LocationCities.jsx";
import LocationOffices from "./components/LocationOffices.jsx";

function App() {
  const appStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
    width: "100vw",
  };

  const locationsStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const headerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const footerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  return (
    <div style={appStyles}>
      <Navbar />
      <div style={headerStyles}>
        <Header />
      </div>
      <div style={locationsStyles}>
        <LocationCities />
        <LocationOffices />
      </div>
      <div style={footerStyles}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
