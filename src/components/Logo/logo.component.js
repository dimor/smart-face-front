import React from 'react';
import Tilt from 'react-tilt';
import './logo.styles.css';
import sitelogo from './sitelogo.png';



const Logo = () => {

  return (
    <div className = 'ma4 mt0'>
      <Tilt
      className = "Tilt   br4 shadow-3  "
      options = {{max: 55}}
      style = {
        {
          height: 250,
          width: 250
        }
      }>
        <div className = "Tilt-inner" > <img src={sitelogo} alt='logo'/> </div>
      </Tilt>
    </div>
  );
}


export default Logo;
