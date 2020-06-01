import React from 'react';
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {OnSubmit,OnChangeName,OnChangeEmail,OnChangePassword} from '../../redux/form/form.actions';
import Loader from '../../components/loader/loader.component';



const Form =(props)=> {

  const history = useHistory();
    
    let regForm = history.location.pathname === '/register' ? true:false;

    const {onSubmitForm,onChangeName,onChangeEmail,onChangePassword} = props;

    const {name,email,password,validation,isPending} = props;
   
    const credentials = {

      name ,
      email,
      password
    
    }

    console.log(isPending)
     return(   
       <article className="br3 ba dark-gray bg-white-20 b--black-50 mv4 w-100-m shadow-5 mw6 center">
          <main className="pa4 black-70">
            <div className="measure">
   
       <Loader isPending={isPending}> 
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">{!regForm?'Sign In':'Register'}</legend>



                {regForm?(<div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                    onChange={(e)=>onChangeName(e.target.value)}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m"
                     type="text" 
                     name="name" 
                      id="name"
                      required
                />
                </div>):null}

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
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="current-password" name="password"  id="password" />
                </div>
              </fieldset>
              <div className="">
                <input
            onClick={()=>onSubmitForm(credentials,history)}
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={!regForm?'Sign In':'Register'} />
              </div>
              <p className=' c--red'>{validation}</p>
              {!regForm?(<div className="lh-copy mt3">
                <p onClick={()=>history.push(`/register`)} className="pointer f6 link dim black db">Register</p>
              </div>):null}
      </Loader>

            </div>
      </main>
      </article>
     );
}





const mapStateToProps = state =>{

  return{
    name:state.form.name,
    email:state.form.email,
    password:state.form.password,
    validation:state.form.validation,
    isPending:state.form.isPending
  }
}

const mapDispatchToProps = dispatch =>{

  return{
    onSubmitForm: (credentials,history) =>dispatch(OnSubmit(credentials,history)),
    onChangeName: (text) =>dispatch(OnChangeName(text)),
    onChangeEmail: (text) =>dispatch(OnChangeEmail(text)),
    onChangePassword: (text) =>dispatch(OnChangePassword(text))

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
