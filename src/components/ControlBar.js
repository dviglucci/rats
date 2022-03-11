import React from "react";

class ControlBar extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.onChange = this.onChange.bind(this);
  };

  onChange() {
      console.log('Slider moved...')
  };

  render() {
    return (
      <div className={'container-bar'}>
        <h3>Do you slide on all your nights like this...</h3>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100"
            id="myRange"
            onChange={this.onChange}
          />
        </div>
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

export default ControlBar;