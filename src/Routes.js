import React from 'react';
import { Route } from 'react-router-dom';
import Map from './components/Map.js';
import Home from './components/Home.js';


const Routes = () => {
    return (
        <div>
         <Route exact path='/' component={Home}/>
         <Route path='/map' component={Map}/>
        </div>
    );
};

export default Routes;