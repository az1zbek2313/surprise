import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

const GOOGLE_MAPS_API_KEY = "AIzaSyAPZvnnWl8tL0G8mDBRa16jn4R3oqYli34";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const initialCenter = {lat: 40.4541325, lng: 71.2056026}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [position, setPosition] = useState(initialCenter);
  const [defaultAddress] = useState("Bagdod, Серова, Fergana Region, Uzbekistan");
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setPosition({ lat, lng }); // Xarita markazini yangilash
    } catch (error) {
      console.error("Xatolik: ", error);
    }
  };

  useEffect(() => {
    handleSelect(defaultAddress); // Dastlabki manzilni yuklash
  }, [defaultAddress]);

  console.log(44, position);

  return isLoaded ? (
    <div>
      <h1>Google Maps bilan ishlash</h1>
      <input
        type="text"
        placeholder="Manzilni kiriting"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "300px", padding: "8px", marginBottom: "10px" }}
      />
      {status === "OK" &&
        <ul>
          {data.map(({ place_id, description }) => (
            <li key={place_id} onClick={() => handleSelect(description)}>
              {description}
            </li>
          ))}
        </ul>
      }
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position} // Dinamik markaz
        zoom={14}
      >
        <Marker position={position} />
      </GoogleMap>
    </div>
  ) : (
    <div>Yuklanmoqda...</div>
  );
};

export default Map;
