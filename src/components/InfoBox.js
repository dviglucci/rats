import React from "react";
import { Link } from "react-router-dom";

const InfoBox = () => {
  return (
    <div className="info-box">
      <div className="info-text">
        <Link
          to={{ pathname: "https://opendata.cityofnewyork.us/" }}
          target="_blank"
          className="link"
        >
          NYC Open Data
        </Link>
        contains information about rat sightings and reports of pigeon waste
        across the city. You can use this web app to explore the data!
      </div>
      <Link to="/map" id="info-box-button">
        Weird but ok
      </Link>
    </div>
  );
};

export default InfoBox;
