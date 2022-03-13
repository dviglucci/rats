import React, { useState } from "react";
import { connect } from "react-redux";
import { showCircle } from "../redux/controlBar";

const ControlBarCircle = (props) => {
  const [renderCircle, setRenderCircle] = useState(false);

  const circleFxn = () => {
      props.renderCircle();
      setRenderCircle(true);
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  return (
    <div>
      <button onClick={circleFxn}>
        How many critters are near me?
      </button>
      <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>Move the circle to select a location</p>
            </div>
          </div>
      {renderCircle === true ?  
          <div>
            There are x rat sightings and x reports of pigeon waste within 1 mile of your
            location 👀
          </div>
       : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    renderCircle: () => dispatch(showCircle()),
  };
};

export default connect(null, mapDispatchToProps)(ControlBarCircle);
