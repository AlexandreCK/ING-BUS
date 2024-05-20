function LocationCities() {
    const locationsCities = [
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
        "Alkmaar",
    ];

    const listItems = locationsCities.map((location, index) => (
        <li key={index}>{location}</li>
    ));
    
    return (
        <div>
            <h2>Locations:</h2>
            <ul>{listItems}</ul>
        </div>
    );
}

export default LocationCities;