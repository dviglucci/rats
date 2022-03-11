import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import MapContainer from './components/MapContainer.js';


const Routes = () => {
    return (
        <div>
         <Route exact path='/' component={Home}/>
         <Route path='/map' component={MapContainer}/>
        </div>
    );
};

export default Routes;