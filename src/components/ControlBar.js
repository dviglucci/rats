import React from "react";
import { connect } from 'react-redux';
import { updateStart, updateEnd } from '../redux/controlBar.js';


class ControlBar extends React.Component {
  constructor() {
    super();
    this.state = {
        startYear: '2011',
        endYear: '2011'
    };

    this.onChange = this.onChange.bind(this);
  };

  onChange(event) {
      console.log(event.target.name)
      console.log(event.target.value)
      this.setState({...this.state, [event.target.name]: event.target.value})
      console.log('STATE CHANGED >>>>', this.state)
  };

  render() {
    return (
      <div className={'container-bar'}>
        <h3>Do you slide on all your nights like this...</h3>
        <div>Show rats</div>
        <label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
  </label>

        <label>Starting year</label>
            <select name='startYear' onChange={this.onChange}>
              <option value={"2011"}>2011</option>
              <option value={"2012"}>2012</option>
              <option value={"2013"}>2013</option>
              <option value={"2014"}>2014</option>
              <option value={"2015"}>2015</option>
              <option value={"2016"}>2016</option>
              <option value={"2017"}>2017</option>
              <option value={"2018"}>2018</option>
              <option value={"2019"}>2019</option>
              <option value={"2020"}>2020</option>
              <option value={"2021"}>2021</option>
              <option value={"2022"}>2022</option>
            </select>
            <label>Ending year</label>
            <select name='endYear' onChange={this.onChange}>
              <option value={"2011"}>2011</option>
              <option value={"2012"}>2012</option>
              <option value={"2013"}>2013</option>
              <option value={"2014"}>2014</option>
              <option value={"2015"}>2015</option>
              <option value={"2016"}>2016</option>
              <option value={"2017"}>2017</option>
              <option value={"2018"}>2018</option>
              <option value={"2019"}>2019</option>
              <option value={"2020"}>2020</option>
              <option value={"2021"}>2021</option>
              <option value={"2022"}>2022</option>
            </select>
      </div>
    );
  }
}

const mapState = (state) => {
    return {
        startYear: state.startYear,
        endYear: state.endYear
    };
};

const mapDispatch = (dispatch) => {
    return {
        updateStart: (year) => dispatch(updateStart(year)),
        updateEnd: (year) => dispatch(updateEnd(year)),
    }
}

export default connect(mapState, mapDispatch)(ControlBar);
