import React from 'react';
import './face_recognition.styles.css';
import {connect} from 'react-redux';
import Loader from '../loader/loader.component';

const FaceRecognition = ({imgUrl,boxes,isPending,errormsg}) => {


  const createboxes=(boxes)=>{

        const mappedBoxes =  boxes.map((box, i) => {
            return(  <div key={i} className='bounding-box'
              style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
              </div>)
          });

    return mappedBoxes;
  }
    

  return (
    <div className='relative center'>
      <div className='absolute'>
        <img className='' id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
      <Loader isPending={isPending}>
        {boxes.length!==0?createboxes(boxes):null}
      </Loader>
      </div>
     
    </div>
    
  );

}

const mapStateToProps = state =>{

  return{

    imgUrl : state.image_link_form.imgUrl,
    boxes : state.image_link_form.boxes,
    isPending:state.image_link_form.isPending,
    errormsg:state.image_link_form.errormsg

  }
}


export default connect(mapStateToProps,null)(FaceRecognition);
