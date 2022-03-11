import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  google,
} from "@react-google-maps/api";
import ratIcon from "../rat-25px.png";
import { connect } from "react-redux";

// const testStart = 2011;
// const testEnd = 2022;

let count = 0;
const icon = ratIcon;

const containerStyle = {
  width: "80vw",
  height: "100vh",
};
const center = {
  lat: 40.7128,
  lng: -74.006,
};


function Map(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalCount, setCount] = useState(0);

  const {} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // The empty deps array [] means this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=DOHMH&descriptor=Rat%20Sighting"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // It's important to handle errors here instead of a catch() block so that we
        // don't swallow exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="container-load">
        <h1>Loading...</h1>
        <img src="favicon.ico" alt="rat emoji" />
        <img src="favicon.ico" alt="rat emoji" />
        <img src="favicon.ico" alt="rat emoji" />
      </div>
    );
  } else {
    return (
      <div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {items
            .filter((element) => {
              // console.log('CREATED DATE', parseFloat(element.created_date.slice(0, 4)))
              count = 0;
              return (
                props.startYear <= parseFloat(element.created_date.slice(0, 4)) &&
                props.endYear > parseFloat(element.created_date.slice(0, 4))
              )
            })
            .map((element) => {
              count += 1;
              return (
                <Marker
                  key={element.unique_key}
                  icon={icon}
                  position={{
                    lat: parseFloat(element.latitude),
                    lng: parseFloat(element.longitude),
                  }}
                />
              );
            })}
            {console.log('COUNT>>>>>', count)}
        </GoogleMap>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    startYear: state.startYear,
    endYear: state.endYear,
  };
};

export default connect(mapState)(Map);
