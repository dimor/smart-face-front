import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Particles from 'react-particles-js';
import PageContainer from './container/page_container.component';
import * as CONSTANTS from './constants';
import {BrowserRouter as Router} from "react-router-dom";


const App =()=> {
  return (
    <div className="App">
      <Router basename={'/smart-face-front'}>
      <Particles className='particles' params={CONSTANTS.PARTICLES_OPTIONS}/>
      <Navigation />
      <PageContainer />
     </Router>
    </div>
  );
}
export default App;
