// This component lists the locations of cities along with their addresses. It highlights visited locations in a different color.

import React from "react";

// LocationCities component definition
function LocationCities() {
    // List of cities
    const cities = [
        "Leeuwarden",
        "Leeuwarden",
        "Groningen",
        "Emmen",
        "Zwolle",
        "Enschede",
        "Apeldoorn",
        "Arnhem",
        "Doetinchem",
        "Nijmegen",
        "Venlo",
        "Maastricht",
        "Eindhoven",
        "Den Bosch",
        "Tilburg",
        "Breda",
        "Middelburg",
        "Dordrecht",
        "Capelle ad ijssel",
        "Rotterdam",
        "Rotterdam",
        "Den Haag",
        "Den Haag",
        "Leidschendam",
        "Zoetermeer",
        "Leiden",
        "Utrecht",
        "Amersfoort",
        "Hilversum",
        "Almere",
        "Amstelveen",
        "Amsterdam",
        "Amsterdam",
        "Amsterdam",
        "Amsterdam",
        "Haarlem",
        "Zaandam",
        "Purmerend",
        "Alkmaar"
    ];
    
    // List of addresses corresponding to the cities
    const addresses = [
        "Tesselschadedestraat 1",
        "Zuiderplein 6",
        "Hereplein 51",
        "Marktplein 150",
        "Roggenstraat 21-23",
        "Boulevard 1945 1",
        "Hoofdstraat 50",
        "Willemsplein 38",
        "Raadhuisstraat 6",
        "Molenstraat 5",
        "Keulsepoort 10",
        "Vrijthof 45",
        "Nieuwstraat 1",
        "Kerkstraat 62",
        "Spoorlaan 420",
        "Markendaalseweg 41",
        "Markt 43",
        "Johan de Wittstraat 27",
        "Centrumpassage 51",
        "Coolsingel 67",
        "Groeninx van Zoelenlaan 125",
        "Tournooiveld 6",
        "Willem de Zwijgerlaan 43",
        "Duindoorn 2",
        "Burgemeester Wegstapelplein 3",
        "Schuttersveld 18",
        "Lange Viestraat 1",
        "Utrechtseweg 8",
        "Kerkstraat 69",
        "Koopmanstraat 12",
        "Stadsplein 96",
        "Osdorpplein 113",
        "Ceintuurbaan 95-99",
        "Rokin 88",
        "Kamerlingh Onneslaan 2",
        "Houtplein 9",
        "Westzijde 2",
        "Koestraat 15",
        "Laat 214"
    ];
    
    // Combine cities and addresses into a single array of strings
    const combined = cities.map((city, i) => `${city} - ${addresses[i]}`);

    // Create list items for each location, highlighting specific locations
    const locationItems = combined.map((location, index) => {
        const isHighlighted = location === "Leeuwarden - Tesselschadedestraat 1" || location === "Leeuwarden - Zuiderplein 6";
        return (
          <li key={index} style={{ color: isHighlighted ? "#ff5e36" : "inherit" }}>
            {location}
          </li>
        );
      });
    
    return (
        <div>
            {/* Title for the locations list */}
            <h2 style={{ textAlign: "center" }}>Locations</h2>
            {/* List of locations */}
            <ul>{locationItems}</ul>
        </div>
    );
}

export default LocationCities;
