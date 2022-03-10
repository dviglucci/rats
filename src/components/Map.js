import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.7128,
  lng: -74.0060,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
   
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      ></GoogleMap>
    );
  };

  return renderMap();
}

export default Map;
