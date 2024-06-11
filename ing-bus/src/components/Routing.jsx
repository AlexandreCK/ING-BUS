import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const Routing = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#ff5e36", weight: 4.5 }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      showAlternatives: false,
      altLineOptions: { styles: [{ opacity: 0 }] },
      createMarker: () => null
    }).addTo(map);

    const routingContainer = document.querySelector(".leaflet-routing-container");
    if (routingContainer) {
      routingContainer.style.display = "none";
    }
    return () => {
      map.removeControl(routingControl);
    };

  }, [map, start, end]);

  return null;
};

export default Routing;