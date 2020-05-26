import React from 'react';
import Logo from '../../components/logo/logo.component';
import Rank from '../../components/rank/rank.component';
import ImageLinkForm from '../../components/image_link_form/image_link_form.component';
import FaceRecognition from '../../components/face_recognition/face_recognition.component';

import {Link,useHistory,useLocation} from "react-router-dom";




const HomePage=()=>{


return(
    
    <React.Fragment>
    <Logo />
    <Rank />     {/*   name={this.state.user.name} entries={this.state.user.entries} */}
    <ImageLinkForm
    onInputChange={this.onInputChange}
    onButtonSubmit={this.onButtonSubmit} />
    <FaceRecognition />  {/*boxes={boxes} imgUrl={imgUrl}*/}
    </React.Fragment>
);
}

export default HomePage;