import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {SignOut,ClearForm} from '../../redux/form/form.actions';
import {useHistory,useRouteMatch} from "react-router-dom";
import {userExist} from './navigation.utils';

const Navigation =({SignOut,user,onClearForm})=>{

  const history = useHistory();
  let match = useRouteMatch();



    const PushToLocation=(location)=>{

      onClearForm();
      
      history.push(location)

    }

    if(history.location.pathname === '/'){
        return <div></div>
    }else{
      if(userExist(user)){
          return(
          <nav style={{display:'flex',justifyContent:'flex-end'}}>
           <p onClick={()=>SignOut(history)} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
  
          </nav>
        );
      }else{
        return(
          <nav style={{display:'flex',justifyContent:'flex-end'}}>
          <p onClick={()=>PushToLocation('/signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={()=>PushToLocation('/register')} className='f3 link dim black underline pa3 pointer'>Register</p>
          </nav>
        );
      }
    }
}

const mapStateToProps=state=>{

  return{
    user:state.form.user,
  } 

}

const mapDispatchToProps=(dispatch)=>{
  return{
    SignOut : (history)=>dispatch(SignOut(history)),
    onClearForm : ()=>dispatch(ClearForm())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navigation);