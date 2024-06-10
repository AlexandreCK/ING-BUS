import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LocationCities from "./components/LocationCities.jsx";
import Map from "./components/Map.jsx";
import Overlay from "./components/Overlay.jsx";

function App() {
  const adminOptions = [
    { label: 'Create a Post', action: () => console.log('Create a Post clicked') },
    { label: 'Change Route', action: () => console.log('Change Route clicked') },
    { label: 'Add Location', action: () => console.log('Add Location clicked') },
    { label: 'Remove Location', action: () => console.log('Remove Location clicked') },
  ];
  
  const adminContent = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: 'black' }}>Administration Panel</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        {adminOptions.map((option, index) => (
          <button key={index} onClick={option.action}>{option.label}</button>
        ))}
      </div>
    </div>
  );
  

  const aboutContent = (
    <div>
      <h2 style={{ color: 'black' }}>About ING BUS</h2>
      <p style={{ color:'black', fontSize: '16px', lineHeight: '1.5' }}>We're on a mission to reduce our data storage footprint and CO2 emissions at ING! Did you know that permanently deleting just 7 emails can make a difference equivalent to driving 1 kilometer less in a diesel car? That's why we're creating a fun and engaging way to raise awareness about email cleanup among ING colleagues across the Netherlands. Join us on a virtual bus ride as it travels past ING offices in major cities, filling up with permanently deleted emails and getting greener with every stop. The more emails we delete together, the faster our bus travels!</p>
    </div>
  );

  const [overlayContent, setOverlayContent] = useState(aboutContent);

  const toggleOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative', // Add relative positioning
  };

  const contentStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
    filter: overlayContent ? 'blur(5px)' : 'none', // Apply blur when overlay is visible
    overflow: overlayContent ? 'hidden' : 'visible', // prevent overflow when overlay is visible
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
    padding: '0',
    margin: '0',
  };

  const locations = [
    { lat: 52.3702, lng: 4.8952 },
  ];

  return (
    <div style={appStyles}>
      {!overlayContent && <Navbar toggleOverlay={toggleOverlay} adminContent={adminContent} aboutContent={aboutContent} />}
      <div style={contentStyles}>
        <div style={squareStyles}>
          <Map locations={locations}/>
        </div>
        <div style={locationStyles}>
          <LocationCities />
        </div>
      </div>
      <Footer />
      {overlayContent && <Overlay content={overlayContent} closeOverlay={closeOverlay} />}
    </div>
  );
}

export default App;
