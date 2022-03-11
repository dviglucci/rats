import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  google,
} from "@react-google-maps/api";
import ratIcon from "../newrat-28px.png";
import pigeonIcon from "../pigeon-28px.png";
import { connect } from "react-redux";
import axios from "axios";

// const testStart = 2011;
// const testEnd = 2022;

let count = 0;
const rat = ratIcon;
const pigeon = pigeonIcon;

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

  const {} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // The empty deps array [] means this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const ratResponse = await axios.get(
          "https://data.cityofnewyork.us/resource/erm2-nwe9.json?descriptor=Rat%20Sighting"
        );
        const pigeonResponse = await axios.get(
          "https://data.cityofnewyork.us/resource/erm2-nwe9.json?descriptor=Pigeon%20Waste"
        );
        setIsLoaded(true);
        setItems(ratResponse.data.concat(pigeonResponse.data));
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    makeRequest();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="container-load">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    console.log("ITEMS>>>>>", items.length);
    console.log(props)
    return (
      <div>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {items
            .filter((element) => {
              count = 0;
              return (
                props.startYear <= parseInt(element.created_date.slice(0, 4)) &&
                props.endYear > parseInt(element.created_date.slice(0, 4)) &&
                ((element.descriptor === "Rat Sighting" && props.showRats) === true ||
                  (element.descriptor === "Pigeon Waste" && props.showPigeons) === true)
              );
            })
            .map((element) => {
              count += 1;
              return (
                <Marker
                  key={element.unique_key}
                  icon={element.descriptor === "Rat Sighting" ? rat : pigeon}
                  position={{
                    lat: parseFloat(element.latitude),
                    lng: parseFloat(element.longitude),
                  }}
                />
              );
            })}
          {console.log("COUNT>>>>>", count)}
        </GoogleMap>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    startYear: state.startYear,
    endYear: state.endYear,
    showRats: state.showRats,
    showPigeons: state.showPigeons,
  };
};

export default connect(mapState)(Map);
