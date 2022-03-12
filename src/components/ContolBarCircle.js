import React from 'react';
import { connect } from "react-redux";
import { showCircle } from '../redux/controlBar';

const ControlBarCircle = (props) => {
  return (
      <div>
         <div onClick={() => props.renderCircle()}>How many pests are near me?</div>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
        renderCircle: () => dispatch(showCircle())
    };
};

export default connect(null, mapDispatchToProps)(ControlBarCircle);