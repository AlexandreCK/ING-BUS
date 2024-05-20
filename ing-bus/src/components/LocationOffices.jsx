function LocationOffices() {
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
        "Laat 214",
      ];

    const listItems = addresses.map((location, index) => (
        <li key={index}>{location}</li>
    ));
    
    return (
        <div>
            <h2>Addresses:</h2>
            <ul>{listItems}</ul>
        </div>
    );
}

export default LocationOffices;