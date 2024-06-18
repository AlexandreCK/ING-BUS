import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import ingIcon from "../assets/favicon.ico";
import ingBusIcon from "../assets/ing-bus.png";
import Routing from "./Routing";

const Legend = ({ deletedItems, totalDistance }) => {
  const fuelLeft = Math.max(0, Math.floor(deletedItems / 7) - totalDistance);

  return (
    <div style={{ 
      position: "absolute", 
      bottom: "85%", 
      left: "1%", 
      zIndex: 1000, 
      backgroundColor: "#242424", 
      padding: "20px", 
      borderRadius: "10px", 
      color: "white", 
      fontFamily: "'Arial', sans-serif", 
      fontSize: "18px", 
      fontWeight: "500",
      lineHeight: "1.5",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <div>
        <span style={{ color: "#ff5e36", fontWeight: "bold" }}>Total distance:</span> {totalDistance} KM<br />
        <span style={{ color: "#ff5e36", fontWeight: "bold" }}>Fuel left:</span> {fuelLeft} KM<br />
        <span style={{ color: "#ff5e36", fontWeight: "bold" }}>Items deleted:</span> {deletedItems}
      </div>
    </div>
  );
};

const Milestones = ({ itemsDeleted }) => {
  const milestones = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
  
  return (
    <div style={{ 
      position: "absolute",
      textAlign: "center",
      bottom: "51%", 
      left: "1%", 
      zIndex: 1000, 
      backgroundColor: "#242424", 
      padding: "20px", 
      borderRadius: "10px", 
      color: "white", 
      fontFamily: "'Arial', sans-serif", 
      fontSize: "18px", 
      fontWeight: "500",
      lineHeight: "1.5",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <div>
        <span style={{ color: "#ff5e36", fontWeight: "bold" }}>MILESTONES</span><br />
        <span style={{ color: "white" }}>Deleted items:</span><br />
        {milestones.map(milestone => (
          <div key={milestone} style={{ color: itemsDeleted >= milestone ? "#ff5e36" : "white" }}>
            {milestone}
          </div>
        ))}
      </div>
    </div>
  );
};

const Map = ({ locations, deletedItems, totalDistance }) => {
  const defaultCenter = [52.1326, 5.2913];

  const customIcon = new Icon({
    iconUrl: ingIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
  });

  const bus = new Icon({
    iconUrl: ingBusIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
  });

  const start = [53.2003, 5.7988]; // start point (example coordinates)
  const end = [53.2244, 6.0441]; // end point (example coordinates)

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <style>
        {`ww
          .custom-popup .leaflet-popup-content-wrapper {
            background-color: #ff5e36;
            color: black;
            font-family: Arial, sans-serif;
            border-radius: 15px;
            padding: 10px;
            font-weight: bold;
          }
  
          .custom-popup .leaflet-popup-content {
            margin: 0;
          }
  
          .custom-popup .leaflet-popup-tip-container {
            display: none;
          }
        `}
      </style>
      <MapContainer
        center={defaultCenter}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution=""
        />
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          attribution=""
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup className="custom-popup">
              <div style={{ textAlign: "center", padding: "20px" }}>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {location.name}
                </span>
                {location.post && (
                  <div style={{ maxWidth: "80vw" }}>
                    {" "}
                    <p
                      style={{
                        fontSize: "16px",
                        marginBottom: "20px",
                        wordWrap: "break-word",
                      }}
                    >
                      {location.post.text}
                    </p>
                    <img
                      src={location.post.image}
                      alt="Post"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker
          position={end}
          icon={bus}
          rotationAngle={355}
          rotationOrigin={"center center"}
        >
          <Popup className="custom-popup">
            <span>ING BUS</span>
          </Popup>
        </Marker>
        <Routing start={start} end={end} />
      </MapContainer>
      <Legend deletedItems={deletedItems} totalDistance={totalDistance} />
      <Milestones itemsDeleted={deletedItems} />
    </div>
  );
};

export default Map;
