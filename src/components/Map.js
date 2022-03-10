import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ratIcon from '../rat-25px.png';


const icon = ratIcon;

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.7128,
  lng: -74.006,
};

function Map() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//   });

//   if (loadError) return "Error loading maps";
//   if (!isLoaded) return "Loading maps";
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const { } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=DOHMH&descriptor=Rat%20Sighting")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
        <h1>Loading...</h1>
        <img src="favicon.ico" alt="rat emoji"/>
        <img src="favicon.ico" alt="rat emoji"/>
        <img src="favicon.ico" alt="rat emoji"/>
        </div>;
  } else {

    return (
      <div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {items.map((element) => {
            return (
              <Marker
                key={element.unique_key}
                icon={icon}
                position={{ lat: parseFloat(element.latitude), lng: parseFloat(element.longitude) }}
              />
            );
          })}
        </GoogleMap>
      </div>
    );
  };
};

export default Map;
