// This component sets up and renders the routing control on the Leaflet map

import { useEffect } from "react"; // Importing useEffect to handle side effects
import { useMap } from "react-leaflet"; // Importing useMap to get the map instance
import L from "leaflet"; // Importing Leaflet
import "leaflet-routing-machine"; // Importing the Leaflet Routing Machine plugin

const Routing = ({ start, end }) => {
  const map = useMap(); // Getting the map instance from the context

  useEffect(() => {
    // Creating the routing control with waypoints and options
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true, // Allow route recalculation while dragging
      lineOptions: {
        styles: [{ color: "#ff5e36", weight: 4.5 }]
      },
      addWaypoints: false, // Disable adding waypoints by clicking on the map
      draggableWaypoints: false, // Disable dragging waypoints
      fitSelectedRoutes: true, // Fit the map view to the route
      show: false, // Hide the routing UI
      showAlternatives: false, // Hide alternative routes
      altLineOptions: { styles: [{ opacity: 0 }] }, // Hide alternative route lines
      createMarker: () => null // Disable creating markers at waypoints
    }).addTo(map); // Adding the routing control to the map

    // Hiding the routing container UI
    const routingContainer = document.querySelector(".leaflet-routing-container");
    if (routingContainer) {
      routingContainer.style.display = "none";
    }

    // Cleanup function to remove the routing control when the component is unmounted or dependencies change
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, start, end]); // Dependencies: re-run the effect when map, start, or end changes

  return null;
};

export default Routing;
