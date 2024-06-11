import { useState } from "react";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import LocationCities from "./components/LocationCities.jsx";
import Map from "./components/Map.jsx";
import Overlay from "./components/Overlay.jsx";

function App() {
  const aboutContent = (
    <div>
      <h2 style={{ color: "black" }}>About ING BUS</h2>
      <p style={{ color: "black", fontSize: "16px", lineHeight: "1.5" }}>
        We"re on a mission to reduce our data storage footprint and CO2 emissions at ING! Did you know that permanently deleting just 7 emails can make a difference equivalent to driving 1 kilometer less in a diesel car? That"s why we"re creating a fun and engaging way to raise awareness about email cleanup among ING colleagues across the Netherlands. Join us on a virtual bus ride as it travels past ING offices in major cities, filling up with permanently deleted emails and getting greener with every stop. The more emails we delete together, the faster our bus travels!
      </p>
    </div>
  );

  const [deletedItems, setDeletedItems] = useState(440); // Initial value
  const totalDistance = 17.8; // Define the total distance

  const [locations, setLocations] = useState([
    { name: "Leeuwarden - Tesselschadedestraat 1", lat: 53.2028, lng: 5.7987, post: null },
    { name: "Leeuwarden - Zuiderplein 6", lat: 53.2003, lng: 5.7988, post: null },
    { name: "Groningen - Hereplein 51", lat: 53.2130, lng: 6.5660, post: null },
    { name: "Emmen - Marktplein 150", lat: 52.7790, lng: 6.9038, post: null },
    { name: "Zwolle - Roggenstraat 21-23", lat: 52.5117, lng: 6.0906, post: null },
    { name: "Enschede - Boulevard 1945 1", lat: 52.2208, lng: 6.8950, post: null },
    { name: "Apeldoorn - Hoofdstraat 50", lat: 52.2113, lng: 5.9596, post: null },
    { name: "Arnhem - Willemsplein 38", lat: 51.9838, lng: 5.9114, post: null },
    { name: "Doetinchem - Raadhuisstraat 6", lat: 51.9645, lng: 6.2885, post: null },
    { name: "Nijmegen - Molenstraat 5", lat: 51.8448, lng: 5.8673, post: null },
    { name: "Venlo - Keulsepoort 10", lat: 51.3695, lng: 6.1735, post: null },
    { name: "Maastricht - Vrijthof 45", lat: 50.8481, lng: 5.6880, post: null },
    { name: "Eindhoven - Nieuwstraat 1", lat: 51.4386, lng: 5.4789, post: null },
    { name: "Den Bosch - Kerkstraat 62", lat: 51.6898, lng: 5.3060, post: null },
    { name: "Tilburg - Spoorlaan 420", lat: 51.5602, lng: 5.0833, post: null },
    { name: "Breda - Markendaalseweg 41", lat: 51.5861, lng: 4.7818, post: null },
    { name: "Middelburg - Markt 43", lat: 51.4988, lng: 3.6115, post: null },
    { name: "Dordrecht - Johan de Wittstraat 27", lat: 51.8154, lng: 4.6653, post: null },
    { name: "Capelle ad IJssel - Centrumpassage 51", lat: 51.9286, lng: 4.5771, post: null },
    { name: "Rotterdam - Coolsingel 67", lat: 51.9200, lng: 4.4781, post: null },
    { name: "Rotterdam - Groeninx van Zoelenlaan 125", lat: 51.8866, lng: 4.5048, post: null },
    { name: "Den Haag - Tournooiveld 6", lat: 52.0816, lng: 4.3147, post: null },
    { name: "Den Haag - Willem de Zwijgerlaan 43", lat: 52.0928, lng: 4.2740, post: null },
    { name: "Leidschendam - Duindoorn 2", lat: 52.0844, lng: 4.3930, post: null },
    { name: "Zoetermeer - Burgemeester Wegstapelplein 3", lat: 52.0571, lng: 4.4930, post: null },
    { name: "Leiden - Schuttersveld 18", lat: 52.1633, lng: 4.4972, post: null },
    { name: "Utrecht - Lange Viestraat 1", lat: 52.0938, lng: 5.1126, post: null },
    { name: "Amersfoort - Utrechtseweg 8", lat: 52.1551, lng: 5.3756, post: null },
    { name: "Hilversum - Kerkstraat 69", lat: 52.2243, lng: 5.1776, post: null },
    { name: "Almere - Koopmanstraat 12", lat: 52.3700, lng: 5.2140, post: null },
    { name: "Amstelveen - Stadsplein 96", lat: 52.3006, lng: 4.8634, post: null },
    { name: "Amsterdam - Osdorpplein 113", lat: 52.3608, lng: 4.8105, post: null },
    { name: "Amsterdam - Ceintuurbaan 95-99", lat: 52.3547, lng: 4.8955, post: null },
    { name: "Amsterdam - Rokin 88", lat: 52.3718, lng: 4.8934, post: null },
    { name: "Amsterdam - Kamerlingh Onneslaan 2", lat: 52.3484, lng: 4.9633, post: null },
    { name: "Haarlem - Houtplein 9", lat: 52.3778, lng: 4.6308, post: null },
    { name: "Zaandam - Westzijde 2", lat: 52.4417, lng: 4.8281, post: null },
    { name: "Purmerend - Koestraat 15", lat: 52.5052, lng: 4.9492, post: null },
    { name: "Alkmaar - Laat 214", lat: 52.6340, lng: 4.7465, post: null }
  ]);

  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);
  const [overlayContent, setOverlayContent] = useState(aboutContent);

  const handleCreatePost = (event) => {
    event.preventDefault();
    const postText = event.target.postText.value;
    const postImage = event.target.postImage.files[0];
    if (selectedLocationIndex !== null) {
      const newLocations = [...locations];
      newLocations[selectedLocationIndex].post = { text: postText, image: URL.createObjectURL(postImage) };
      setLocations(newLocations);
      closeOverlay();
    }
  };

  const handleSelectLocation = (event) => {
    const index = event.target.value;
    setSelectedLocationIndex(index);
  };
  

  const adminOptions = [
    {
      label: "Create a Post",
      action: () => setOverlayContent(createPostContent),
    },
    { label: "Change Route", action: () => console.log("Change Route clicked") },
    { label: "Add Location", action: () => console.log("Add Location clicked") },
    { label: "Remove Location", action: () => console.log("Remove Location clicked") },
    {
      label: "Change deleted items",
      action: () => {
        const newDeletedItems = prompt("Enter the new number of deleted items:");
        if (newDeletedItems !== null && !isNaN(newDeletedItems)) {
          setDeletedItems(parseInt(newDeletedItems));
        }
      },
    },
  ];

  const createPostContent = (
    <div>
      <h2 style={{ color: "black", fontFamily: "Arial"}}>CREATE POST</h2>
      <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ fontWeight: 'bold' }}>Select Location:</span>
          <select
            value={selectedLocationIndex !== null ? selectedLocationIndex : ""}
            onChange={handleSelectLocation}
          >
            <option value="" disabled>
              Choose a location
            </option>
            {locations.map((location, index) => (
              <option key={index} value={index}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ fontWeight: 'bold' }}>Post Text:</span>
          <input type="text" name="postText" required />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ fontWeight: 'bold' }}>Post Image:</span>
          <input type="file" name="postImage" accept="image/*" required />
        </label>
        <button type="submit" style={{ alignSelf: 'center', padding: '8px 16px', backgroundColor: '#ff5e36', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Post</button>
      </form>
    </div>
  );

  const toggleOverlay = (content) => {
    setOverlayContent(content);
  };

  const closeOverlay = () => {
    setOverlayContent(null);
  };

  const appStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "relative",
  };

  const contentStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    filter: overlayContent ? "blur(5px)" : "none",
    overflow: overlayContent ? "hidden" : "visible",
  };

  const squareStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: "75%",
    height: "100%",
    margin: "0 10px",
  };

  const locationStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: "100%",
    padding: "0",
    margin: "0",
  };

  const adminContent = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ color: "black" }}>Administration Panel</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {adminOptions.map((option, index) => (
          <button key={index} onClick={option.action}>{option.label}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={appStyles}>
      {/* Navbar and other components */}
      {!overlayContent && (
        <Navbar toggleOverlay={toggleOverlay} adminContent={adminContent} aboutContent={aboutContent} />
      )}
      <div style={contentStyles}>
        {/* Render Map component and pass deletedItems and totalDistance as props */}
        <div style={squareStyles}>
          <Map locations={locations} deletedItems={deletedItems} totalDistance={totalDistance} />
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