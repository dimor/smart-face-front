import React from 'react';
import Logo from '../../components/logo/logo.component';
import {useHistory} from "react-router-dom";


const Main =()=>{


    const history = useHistory();



    return(
    <div className='vh-100 flex flex-column items-center justify-center'>

        <Logo />

        <div onClick={()=>history.push('/signin')} className="f6 ma2 br-pill white no-underline ba grow pv2 ph5 dib pointer" href="#">
        Enter
        </div>

    </div>
    )  





}


export default Main;