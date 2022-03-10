import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


const dummyData = [
    {id: 1, lat: 40.667660, lng: -73.961880},
    {id: 2, lat: 40.741130, lng: -73.989690},
    {id: 3, lat: 40.816971, lng: -73.924110},
]


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
        <div>
          <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
      >
          <Marker key='marker-1'  position={{lat: 40.724020, lng: -73.950660}}/>
          {dummyData.map((element) => {
              return (
                  <Marker key={element.id} position={{lat: element.lat, lng: element.lng}}/>
              )
          })}
     </GoogleMap>
      
        </div>
    );
  };

  return renderMap();
}

export default Map;
