import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Circle,
} from "@react-google-maps/api";
import ratIcon from "../newrat-28px.png";
import pigeonIcon from "../pigeon-28px.png";
import pizza from "../pizza.png";
import { connect } from "react-redux";
import axios from "axios";
import { getDistance } from "./CircleFormula.js";
import { ratsInCircle, pigeonsInCircle } from "../redux/controlBar.js";


let ratCount;
let pigeonCount;
let icon;


const containerStyle = {
  width: "80vw",
  height: "100vh",
};

const startingCenter = {
  lat: 40.695215,
  lng: -74.026049,
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: true,
  draggable: true,
  editable: false,
  visible: true,
  radius: 1609.34,
  zIndex: 1,
};

function Map(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [circleCenter, setCircleCenter] = useState(startingCenter);

  useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY + '&libraries=geometry',
  });

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

  const onDrag = (event) => {
    setCircleCenter({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    props.updateRatsInCircle(ratCount);
    props.updatePigeonsInCircle(pigeonCount);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="container-load">
        <h1>Loading...</h1>
        <img src={pizza} className="pizza" alt="logo" />
      </div>
    );
  } else {
    ratCount = 0;
    pigeonCount = 0;
    return (
      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={startingCenter}
          zoom={11}
        >
          {items
            .filter((element) => {
              return (
                props.startYear <= parseInt(element.created_date.slice(0, 4)) &&
                props.endYear > parseInt(element.created_date.slice(0, 4)) &&
                ((element.descriptor === "Rat Sighting" && props.showRats) ===
                  true ||
                  (element.descriptor === "Pigeon Waste" &&
                    props.showPigeons) === true)
              );
            })
            .map((element) => {
               const distanceToCenter = getDistance(
                    circleCenter,
                    {lat: parseFloat(element.latitude), lng: parseFloat(element.longitude)}
                );
              if (element.descriptor === "Rat Sighting") {
                icon = ratIcon;
                if (distanceToCenter <= 1609.34) {
                    ratCount += 1;
                    console.log('RAT COUNT INCREMENTED >>>>', ratCount);
                };
              } else {
                icon = pigeonIcon;
                if (distanceToCenter <= 1609.34) {
                    pigeonCount += 1;
                    console.log('PIGEON COUNT INCREMENTED >>>>', pigeonCount);
                };
              };
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
          {props.showCircle === true ? (
            <Circle
              options={circleOptions}
              center={circleCenter}
              onDragEnd={onDrag}
            />
          ) : null}
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
    showCircle: state.showCircle,
    ratsInCircle: state.ratsInCircle,
    pigeonsInCircle: state.pigeonsInCircle,
  };
};

const mapDispatch = (dispatch) => {
    return {
      updateRatsInCircle: (ratCount) => dispatch(ratsInCircle(ratCount)),
      updatePigeonsInCircle: (pigeonCount) => dispatch(pigeonsInCircle(pigeonCount)),
    };
  };

export default connect(mapState, mapDispatch)(Map);
