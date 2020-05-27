import React from 'react';
import Logo from '../../components/logo/logo.component';
import Rank from '../../components/rank/rank.component';
import ImageLinkForm from '../../components/image_link_form/image_link_form.component';
import FaceRecognition from '../../components/face_recognition/face_recognition.component';
import {connect} from 'react-redux';
import {Link,useHistory,useLocation} from "react-router-dom";




const HomePage=(props)=>{

    const {user} = props;


return(
    
    <React.Fragment>
    <Logo />
    <Rank name={user.name} entries={user.entries}/>  
    <ImageLinkForm
    onInputChange={this.onInputChange}
    onButtonSubmit={this.onButtonSubmit} />
    <FaceRecognition />  {/*boxes={boxes} imgUrl={imgUrl}*/}
    </React.Fragment>
);
}






const mapStateToProps = state =>{

    return{

        user : state.form.user

    }
}



export default connect(mapStateToProps,null)(HomePage);