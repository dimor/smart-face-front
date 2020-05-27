import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {SignOut} from '../../redux/form/form.actions';
import {useHistory,useRouteMatch} from "react-router-dom";
import {userExist} from './navigation.utils';

const Navigation =({SignOut,user})=>{

  const history = useHistory();
  let match = useRouteMatch();


  console.log('nav',match);
  console.log('nav',history);

    if(userExist(user)){
        return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
         <p onClick={()=>SignOut(history)} className='f3 link dim black underline pa3 pointer'>Sign Out</p>

        </nav>
      );
    }else{
      return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
         <Link to={`${process.env.PUBLIC_URL}/signin`}><p className='f3 link dim black underline pa3 pointer'>Sign In</p></Link>
         <Link to={`${process.env.PUBLIC_URL}/register` }><p className='f3 link dim black underline pa3 pointer'>Register</p></Link>
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