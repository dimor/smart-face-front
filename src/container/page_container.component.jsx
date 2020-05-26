import React from 'react';
import Form from '../pages/form/form.component';
import HomePage from '../pages/home/home.component';
import SignInPage from '../pages/signin/signin.component';
import RegisterPage from '../pages/register/register.component';
import {Switch, Route,Redirect,useHistory,useLocation} from "react-router-dom";
import {connect} from 'react-redux';


const PageContainer =({user})=>{

return(
    <Switch>
    <Route path="/" exact>
        <Form />
    </Route>
    <Route path="/face" exact>
        <HomePage />
    </Route>
    <Route path="/register" exact>
          <Form />
    </Route>
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




export default connect(mapStateToProps,null)(PageContainer);