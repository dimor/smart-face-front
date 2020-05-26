import React from 'react';
import {Link,useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {SignInSubmit,SignInOnChangeEmail, SignInOnChangePassword} from '../../redux/signin/signin.actions';



const mapStateToProps=state=>{

  return{
    signInEmail:state.signin.signInEmail,
    signInPassword:state.signin.signInPassword,
    response:state.signin.response
  } 
}

const mapDispatchToProps=(dispatch)=>{
  return{
    SignInSubmit : (credentials,history)=>dispatch(SignInSubmit(credentials,history)),
    SignInOnChangeEmail: (text)=>dispatch(SignInOnChangeEmail(text)),
    SignInOnChangePassword: (text)=>dispatch(SignInOnChangePassword(text)),

  }
}


const SignIn =(props)=> {

  const{SignInOnChangeEmail,SignInOnChangePassword,SignInSubmit,signInEmail,signInPassword,response} = props;

    let credentials = {

      email:signInEmail,
      password:signInPassword

    }

    const history = useHistory();
    
    console.log('singin',history);

     return(   
          <article className="br3 ba dark-gray bg-white-20 b--black-50 mv4 w-100-m shadow-5 mw6 center">
          <main className="pa4 black-70">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                  onChange={(e)=>SignInOnChangeEmail(e.target.value)}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                  onChange={(e)=>SignInOnChangePassword(e.target.value)}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="current-password" name="password"  id="password" />
                </div>
              </fieldset>
              <div className="">
                <input
                onClick={()=>SignInSubmit(credentials,history)} 
          
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
              </div>
              <div className="lh-copy mt3">
                <Link to='/register' ><p className="pointer f6 link dim black db">Register</p></Link>
              </div>
            </div>
      </main>
      </article>
     );
}





export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
