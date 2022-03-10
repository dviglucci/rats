import React from 'react';
import { Route } from 'react-router-dom';
import Map from './components/Map.js'


const Routes = () => {
    return (
        <div>
         <Route path='/map' component={Map}/>
        </div>
    );
};

export default Routes;