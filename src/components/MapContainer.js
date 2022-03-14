import React from 'react';
import ControlBar from './ControlBar';
import Map from './Map';


const MapContainer = () => {
    return (
        <div className={'container-row'}>
          <Map className={'container-col'}/>
          <ControlBar />
          {/* <img src={splat} alt="splat" id='splat'/> */}
        </div>
    );
};

export default MapContainer;