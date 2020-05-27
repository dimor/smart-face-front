import React from 'react';
import Form from '../pages/form/form.component';
import HomePage from '../pages/home/home.component';
import {Switch, Route,Redirect,useHistory,useLocation,useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';


const PageContainer =({user})=>{


  let match = useRouteMatch();
  
  console.log('match',match)
  

return(
    <Switch>
    <Route path={`${process.env.PUBLIC_URL}/signin`} >
        <Form />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/face`} exact>
        <HomePage />
    </Route>
    <Route path={`/register`} exact>
          <Form />
    </Route>
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




export default connect(mapStateToProps,null)(PageContainer);