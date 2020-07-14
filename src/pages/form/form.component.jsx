import React from 'react';
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {OnSubmit,OnChangeName,OnChangeEmail,OnChangePassword,ClearForm} from '../../redux/form/form.actions';
import Loader from '../../components/loader/loader.component';



const Form =(props)=> {

  const history = useHistory();
    
  const {onSubmitForm,onChangeName,onChangeEmail,onChangePassword,onClearForm} = props;

  const {name,email,password,validation,isPending} = props;
 
  const credentials = {

    name ,
    email,
    password
  
  }

  const guestCredentials = {

    name:'guest' ,
    email:'guest@example.com',
    password:'guest'
  
  }

  let regForm = history.location.pathname === '/register' ? true:false;

const PushToRegister=()=>{
  onClearForm()
  history.push(`/register`)
}


     return(   
       <article className="db ma1 br3 ba dark-gray bg-white-20 b--black-50 mv4 shadow-5 mw6 center">
          <main className=" pa4 black-70">
            <div className="">
   
       <Loader isPending={isPending}> 
              <fieldset  className="pa1 ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">{!regForm?'Sign In':'Register'}</legend>



                {regForm?(<div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input
                     value={name}
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
                  value={email}
                  onChange={(e)=>onChangeEmail(e.target.value)}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                      value={password}
                 onChange={(e)=>onChangePassword(e.target.value)}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100-m" type="password" name="password"  id="password" />
                </div>
              </fieldset>
              <div className="">
                <input
            onClick={()=>onSubmitForm(credentials,history)}
                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={!regForm?'Sign In':'Register'} />
              </div>
              {!regForm?(<div className="ma3">
                <input
            onClick={()=>onSubmitForm(guestCredentials,history)}
                 className=" ph2 pv1 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value={'Sign In As Guest'} />
              </div>):null}
              <p className='red bn '>{validation}</p>
              {!regForm?(<div className="lh-copy mt2">
                <p onClick={()=>PushToRegister()} className="pointer f6 link dim black db">Register</p>
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
    onChangePassword: (text) =>dispatch(OnChangePassword(text)),
    onClearForm:()=>dispatch(ClearForm())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Form);
