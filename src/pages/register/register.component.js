import React from 'react';
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {RegisterOnChangeEmail,RegisterOnChangePassword,RegisterOnChangeName,RegisterSubmit} from '../../redux/register/register.actions';




const Register =(props)=> {

  const {registerName,registerEmail,registerPassword,onChangeName,onChangeEmail,onChangePassword,onSubmit} = props;

  const history = useHistory();


  const credencials = {

    name : registerName,
    email : registerEmail,
    password: registerPassword
  
  }




  return (
    <article className="br3 ba dark-gray bg-white-20 b--black-50 mv4 w-50-m w-25-l shadow-5 mw6 center">
    <main className="pa4 black-70">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input
            onChange={(e)=>onChangeName(e.target.value)}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="text" name="name"  id="name" />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
                onChange={(e)=>onChangeEmail(e.target.value)}
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input
                onChange={(e)=>onChangePassword(e.target.value)}
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className=" ">
          <input onClick={()=>onSubmit(credencials,history)} className=" pointer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
        </div>
      </div>
</main>
</article>
  );
}



const mapStateToProps=(state)=>{

  return{
    registerName:state.register.RegisterName,
    registerEmail:state.register.RegisterEmail,
    registerPassword:state.register.RegisterPassword
  }
}


const mapDispatchToProps=(dispatch)=>{

  return {
    onChangeName: (text)=>dispatch(RegisterOnChangeName(text)),
    onChangeEmail: (text)=>dispatch(RegisterOnChangeEmail(text)),
    onChangePassword: (text)=>dispatch(RegisterOnChangePassword(text)),
    onSubmit : (credencials,history) => dispatch(RegisterSubmit(credencials,history))
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Register);
