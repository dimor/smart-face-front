import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Particles from 'react-particles-js';
import PageContainer from './container/page_container.component';
import * as CONSTANTS from './constants';
import {HashRouter} from "react-router-dom";


const App =( )=> {
  return (
    <div className="App">
      <HashRouter basename='/'> 
      <Particles className='particles' params={CONSTANTS.PARTICLES_OPTIONS}/>
      <Navigation />
      <PageContainer />
     </HashRouter>
    </div>
  );
}
export default App;
