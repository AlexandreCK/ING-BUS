import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import ingIcon from '../assets/favicon.ico';

const Legend = () => {
  return (
    <div style={{ position: 'absolute', bottom: 945, left: 20, zIndex: 1000, backgroundColor: 'white', padding: 10, borderRadius: 10, }}>
      <div style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: 'black', fontSize: 16 }}>
        Total distance: 220KMs<br />
        Fuel left: 45KMs<br />
        Items deleted: 6000
      </div>
    </div>
  );
};

const Map = ({ currentLocation }) => {
  const defaultCenter = [52.1326, 5.2913];
  
  const customIcon = new Icon({
    iconUrl: ingIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
  });

  const locations = [
    { name: 'Leeuwarden - Tesselschadedestraat 1', lat: 53.2028, lng: 5.7987 },
    { name: 'Leeuwarden - Zuiderplein 6', lat: 53.2003, lng: 5.7988 },
    { name: 'Groningen - Hereplein 51', lat: 53.2130, lng: 6.5660 },
    { name: 'Emmen - Marktplein 150', lat: 52.7790, lng: 6.9038 },
    { name: 'Zwolle - Roggenstraat 21-23', lat: 52.5117, lng: 6.0906 },
    { name: 'Enschede - Boulevard 1945 1', lat: 52.2208, lng: 6.8950 },
    { name: 'Apeldoorn - Hoofdstraat 50', lat: 52.2113, lng: 5.9596 },
    { name: 'Arnhem - Willemsplein 38', lat: 51.9838, lng: 5.9114 },
    { name: 'Doetinchem - Raadhuisstraat 6', lat: 51.9645, lng: 6.2885 },
    { name: 'Nijmegen - Molenstraat 5', lat: 51.8448, lng: 5.8673 },
    { name: 'Venlo - Keulsepoort 10', lat: 51.3695, lng: 6.1735 },
    { name: 'Maastricht - Vrijthof 45', lat: 50.8481, lng: 5.6880 },
    { name: 'Eindhoven - Nieuwstraat 1', lat: 51.4386, lng: 5.4789 },
    { name: 'Den Bosch - Kerkstraat 62', lat: 51.6898, lng: 5.3060 },
    { name: 'Tilburg - Spoorlaan 420', lat: 51.5602, lng: 5.0833 },
    { name: 'Breda - Markendaalseweg 41', lat: 51.5861, lng: 4.7818 },
    { name: 'Middelburg - Markt 43', lat: 51.4988, lng: 3.6115 },
    { name: 'Dordrecht - Johan de Wittstraat 27', lat: 51.8154, lng: 4.6653 },
    { name: 'Capelle ad IJssel - Centrumpassage 51', lat: 51.9286, lng: 4.5771 },
    { name: 'Rotterdam - Coolsingel 67', lat: 51.9200, lng: 4.4781 },
    { name: 'Rotterdam - Groeninx van Zoelenlaan 125', lat: 51.8866, lng: 4.5048 },
    { name: 'Den Haag - Tournooiveld 6', lat: 52.0816, lng: 4.3147 },
    { name: 'Den Haag - Willem de Zwijgerlaan 43', lat: 52.0928, lng: 4.2740 },
    { name: 'Leidschendam - Duindoorn 2', lat: 52.0844, lng: 4.3930 },
    { name: 'Zoetermeer - Burgemeester Wegstapelplein 3', lat: 52.0571, lng: 4.4930 },
    { name: 'Leiden - Schuttersveld 18', lat: 52.1633, lng: 4.4972 },
    { name: 'Utrecht - Lange Viestraat 1', lat: 52.0938, lng: 5.1126 },
    { name: 'Amersfoort - Utrechtseweg 8', lat: 52.1551, lng: 5.3756 },
    { name: 'Hilversum - Kerkstraat 69', lat: 52.2243, lng: 5.1776 },
    { name: 'Almere - Koopmanstraat 12', lat: 52.3700, lng: 5.2140 },
    { name: 'Amstelveen - Stadsplein 96', lat: 52.3006, lng: 4.8634 },
    { name: 'Amsterdam - Osdorpplein 113', lat: 52.3608, lng: 4.8105 },
    { name: 'Amsterdam - Ceintuurbaan 95-99', lat: 52.3547, lng: 4.8955 },
    { name: 'Amsterdam - Rokin 88', lat: 52.3718, lng: 4.8934 },
    { name: 'Amsterdam - Kamerlingh Onneslaan 2', lat: 52.3484, lng: 4.9633 },
    { name: 'Haarlem - Houtplein 9', lat: 52.3778, lng: 4.6308 },
    { name: 'Zaandam - Westzijde 2', lat: 52.4417, lng: 4.8281 },
    { name: 'Purmerend - Koestraat 15', lat: 52.5052, lng: 4.9492 },
    { name: 'Alkmaar - Laat 214', lat: 52.6340, lng: 4.7465 }
  ];

  return (
    <div style={{ height: "100%", width: "100%", position: 'relative' }}>
      <style>
        {`
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
      <MapContainer center={defaultCenter} zoom={8} style={{ height: "100%", width: "100%" }} zoomControl={false}>
  <TileLayer
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    attribution=''
  />
  <TileLayer
    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
    attribution=''
  />
  {
    locations.map((location, index) => (
      <Marker
        key={index}
        position={[location.lat, location.lng]}
        icon={customIcon}
      >
        <Popup className="custom-popup">
          <span>{location.name}</span>
        </Popup>
      </Marker>
    ))
  }
</MapContainer>
      <Legend />
    </div>
  );
}

export default Map;