import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ratIcon from '../rat-icon.png';

const dummyData = [
  { id: 1, lat: 40.66766, lng: -73.96188 },
  { id: 2, lat: 40.74113, lng: -73.98969 },
  { id: 3, lat: 40.816971, lng: -73.92411 },
  { id: 4, lat: 40.72402, lng: -73.95066 },
];

const icon = ratIcon;

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.7128,
  lng: -74.006,
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
      <div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {dummyData.map((element) => {
            return (
              <Marker
                key={element.id}
                icon={icon}
                position={{ lat: element.lat, lng: element.lng }}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  };

  return renderMap();
}

export default Map;
