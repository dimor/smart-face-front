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
    <Route path={`/signin`} component={Form} />
    <Route path={`/face`} component={HomePage} />
    <Route path={`/register`} component={Form} />
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




export default connect(mapStateToProps,null)(PageContainer);