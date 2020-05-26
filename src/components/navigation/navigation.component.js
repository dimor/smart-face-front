import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {SignOut} from '../../redux/form/form.actions';
import {useHistory} from "react-router-dom";
import {userExist} from './navigation.utils';

const Navigation =({SignOut,user})=>{

  const history = useHistory();

  console.log('nav',user);

    if(userExist(user)){
        return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
         <p onClick={()=>SignOut(history)} className='f3 link dim black underline pa3 pointer'>Sign Out</p>

        </nav>
      );
    }else{
      return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
         <Link to="/"><p className='f3 link dim black underline pa3 pointer'>Sign In</p></Link>
         <Link to="/register"><p className='f3 link dim black underline pa3 pointer'>Register</p></Link>
        </nav>
      );
    }
}

const mapStateToProps=state=>{

  return{
    user:state.form.user,
  } 

}

const mapDispatchToProps=(dispatch)=>{
  return{
    SignOut : (history)=>dispatch(SignOut(history))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navigation);