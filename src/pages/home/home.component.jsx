import React from 'react';
import Rank from '../../components/rank/rank.component';
import ImageLinkForm from '../../components/image_link_form/image_link_form.component';
import FaceRecognition from '../../components/face_recognition/face_recognition.component';
import {connect} from 'react-redux';




const HomePage=(props)=>{

    const {user} = props;


return(
    
    <React.Fragment>
        <Rank name={user.name} entries={user.entries}/>  
        <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition /> 
    </React.Fragment>
);
}






const mapStateToProps = state =>{

    return{

        user : state.form.user

    }
}



export default connect(mapStateToProps,null)(HomePage);