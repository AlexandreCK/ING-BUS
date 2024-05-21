import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LocationCities from "./components/LocationCities.jsx";
import LocationOffices from "./components/LocationOffices.jsx";

function App() {
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
  };

  const squareStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: '75%',
    height: '100%',
    margin: '0 10px',
  };

  const locationStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '100%',
  };

  const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  };

  return (
    <div style={appStyles}>
      <Navbar/>
      <Header style={headerStyles} />
      <div style={contentStyles}>
        <div style={squareStyles}></div>
        <div style={locationStyles}>
          <LocationCities />
        </div>
        <div style={locationStyles}>
          <LocationOffices />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
