import React from 'react';
import Form from '../pages/form/form.component';
import HomePage from '../pages/home/home.component';
import SignInPage from '../pages/signin/signin.component';
import RegisterPage from '../pages/register/register.component';
import {Switch, Route,Redirect,useHistory,useLocation,useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';


const PageContainer =({user})=>{


  let match = useRouteMatch();
  
  console.log('match',match)
  

return(
    <Switch>
    <Route path={`${match.path}/signin` } exact>
        <Form />
    </Route>
    <Route path={`${match.path}/face`} exact>
        <HomePage />
    </Route>
    <Route path={`${match.path}/register`} exact>
          <Form />
    </Route>
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




export default connect(mapStateToProps,null)(PageContainer);