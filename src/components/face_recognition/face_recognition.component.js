import React from 'react';
import './face_recognition.styles.css';


const FaceRecognition = ({imgUrl='',boxes=[]}) => {


  const createboxes=(boxes)=>{

        const mappedBoxes =  boxes.map((box, i) => {
            return(  <div key={i} className='bounding-box'
              style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
              </div>)
          });

    return mappedBoxes;
  }


  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
          {boxes.length!==0?createboxes(boxes):null}
      </div>

    </div>
  );

}


export default FaceRecognition;
