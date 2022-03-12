import React, { useState } from "react";
import { connect } from "react-redux";
import { showCircle } from "../redux/controlBar";

const ControlBarCircle = (props) => {
  const [renderCircle, setRenderCircle] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          props.renderCircle();
          setRenderCircle(true);
        }}
      >
        How many pests are near me?
      </div>
      {renderCircle === true ? (
        <div>
          There are x rat sightings and x reports of pigeon waste at your
          location 👀
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    renderCircle: () => dispatch(showCircle()),
  };
};

export default connect(null, mapDispatchToProps)(ControlBarCircle);
