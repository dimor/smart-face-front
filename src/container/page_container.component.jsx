import React from 'react';
import Form from '../pages/form/form.component';
import HomePage from '../pages/home/home.component';
import {Switch, Route,Redirect,useHistory,useLocation,useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';


const PageContainer =({user})=>{


  let match = useRouteMatch();
  
  console.log('url public',process.env.PUBLIC_URL)
  

return(
    <Switch>
    <Route path={`${process.env.PUBLIC_URL}/signin`} exact>
        <Form />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/face`} >
        <HomePage />
    </Route>
    <Route path={`${process.env.PUBLIC_URL}/register`} exact >
          <Form />
    </Route>
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




export default connect(mapStateToProps,null)(PageContainer);