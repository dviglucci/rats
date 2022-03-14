import React from "react";
import { connect } from "react-redux";
import { updateStart, updateEnd, showRats, showPigeons } from "../redux/controlBar.js";
import rat from '../newrat-28px.png';
import pigeon from '../pigeon-28px.png';
import ControlBarCircle from "./ControlBarCircle.js";
import splat from "../splat.png";
import history from "../history.js";

class ControlBar extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.checker = this.checker.bind(this);
  }

  onChange(event) {
    if (event.target.name === "startYear") {
      this.props.updateStart(event.target.value);
    } else if (event.target.name === "endYear") {
      this.props.updateEnd(event.target.value);
    }
  }

  checker(event) {
    if (event.target.name === 'rats') {
        this.props.updateRats(!this.props.showRats);
    } else {
        this.props.updatePigeons(!this.props.showPigeons);
    };
  };

  render() {
    return (
      <div className={"container-bar"}>
          <div className="splat-div">
            {/* <div id="splat-text">Home</div> */}
            <img src={splat} alt="splat" id="splat" onClick={() => history.push('/')}/>
          </div>

        <div className="key" id="key-top">
          <img src={rat} alt="rat icon" className="icon"/>
          <div>Rat sighting</div>
        </div>
        <label className="switch">
          <input name="rats" type="checkbox" onChange={this.checker} />
          <span className="slider round"></span>
        </label>

        <div className="key">
          <img src={pigeon} alt="pigeon icon" className="icon"/>
          <div>Pigeon waste</div>
        </div>
        <label className="switch">
          <input name="pigeons" type="checkbox" onChange={this.checker} />
          <span className="slider round"></span>
        </label>

        <label>Starting year</label>
        <select name="startYear" onChange={this.onChange}>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
          <option value={2016}>2016</option>
          <option value={2017}>2017</option>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
        <label>Ending year</label>
        <select name="endYear" defaultValue={2012} onChange={this.onChange}>
          <option value={2011}>2011</option>
          <option value={2012}>2012</option>
          <option value={2013}>2013</option>
          <option value={2014}>2014</option>
          <option value={2015}>2015</option>
          <option value={2016}>2016</option>
          <option value={2017}>2017</option>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
        <ControlBarCircle />
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

const mapDispatch = (dispatch) => {
  return {
    updateStart: (year) => dispatch(updateStart(year)),
    updateEnd: (year) => dispatch(updateEnd(year)),
    updateRats: (boolean) => dispatch(showRats(boolean)),
    updatePigeons: (boolean) => dispatch(showPigeons(boolean)),
  };
};

export default connect(mapState, mapDispatch)(ControlBar);
